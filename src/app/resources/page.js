'use client';
import Image from 'next/image';
import { useState } from 'react';


export default function ResourcesPage() {
  const [filters, setFilters] = useState({
    role: [],
    type: [],
  });

  const roles = ['Homeowner', 'Architect', 'Developer'];
  const types = ['Brochure', 'Case Study', 'Technical Sheet'];

  const brochures = [
    {
      title: 'Pequeño Architecture Brochure',
      description: 'Discover our approach to timeless, sustainable architectural design.',
      image: '/brochure1.jpg',
      pdf: '/pdfs/pequeno-architecture.pdf',
      roles: ['Architect', 'Developer'],
      types: ['Brochure'],
    },
    {
      title: 'Sustainability Case Study',
      description: 'See how Pequeño integrates off-grid and eco-conscious solutions in real projects.',
      image: '/brochure2.jpg',
      pdf: '/pdfs/sustainability-case-study.pdf',
      roles: ['Homeowner', 'Developer'],
      types: ['Case Study'],
    },
    {
      title: 'Technical Specifications Sheet',
      description: 'Detailed technical information for Pequeño projects and structures.',
      image: '/brochure3.jpg',
      pdf: '/pdfs/pequeno-technical-sheet.pdf',
      roles: ['Architect', 'Developer'],
      types: ['Technical Sheet'],
    },
  ];

  // Filtering logic
  const filteredBrochures = brochures.filter((item) => {
    const roleMatch = filters.role.length === 0 || filters.role.some((r) => item.roles.includes(r));
    const typeMatch = filters.type.length === 0 || filters.type.some((t) => item.types.includes(t));
    return roleMatch && typeMatch;
  });

  // Checkbox toggle handlers
  const handleRoleChange = (role) => (e) => {
    const { checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      role: checked ? [...prev.role, role] : prev.role.filter((r) => r !== role),
    }));
  };

  const handleTypeChange = (type) => (e) => {
    const { checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      type: checked ? [...prev.type, type] : prev.type.filter((t) => t !== type),
    }));
  };

  return (

    <main className="font-sans text-gray-800 py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-semibold tracking-widest uppercase text-black">Resources and Brochures</h1>
        <p className="font-thin tracking-widest uppercase text-black mb-6">
          Explore our collection of brochures, case studies, and technical information to help you plan and build with confidence.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {/* LEFT FILTER COLUMN */}
          <div className="border p-6 rounded-md h-fit">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">I am</h3>
              {roles.map((role) => (
                <div key={role} className="mb-2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-black mr-2"
                      checked={filters.role.includes(role)}
                      onChange={handleRoleChange(role)}
                    />
                    <span>{role}</span>
                  </label>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Type</h3>
              {types.map((type) => (
                <div key={type} className="mb-2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-black mr-2"
                      checked={filters.type.includes(type)}
                      onChange={handleTypeChange(type)}
                    />
                    <span>{type}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT AREA */}
          <div className="md:col-span-2">
            <div className="bg-gray-100 p-4 mb-6">
              <h2 className="font-semibold tracking-widest uppercase text-black">Available Resources</h2>
            </div>

            {filteredBrochures.length > 0 ? (
              <div className="space-y-6">
                {filteredBrochures.map((brochure, index) => (
                  <div
                    key={index}
                    className="border rounded-md p-4 flex flex-col md:flex-row gap-6 bg-white shadow-sm"
                  >
                    <div className="w-[100px] flex-shrink-0">
                      <div className="aspect-[1/1.41] w-full overflow-hidden rounded">
                        <Image
                          src={brochure.image}
                          alt={brochure.title}
                          width={80}
                          height={120}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>

                    <div className="w-full md:w-2/3 flex flex-col justify-between">
                      <div>
                        <h3 className="font-semibold tracking-widest uppercase text-black">{brochure.title}</h3>
                        <p className="font-thin tracking-widest uppercase text-black mb-6">{brochure.description}</p>
                      </div>
                      <a
                        href={brochure.pdf}
                        download
                        className="inline-block mt-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 w-fit"
                      >
                        Download PDF
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No resources match your selected filters.</p>
            )}
          </div>
        </div>
      </div>
    </main>
    
  );
}
