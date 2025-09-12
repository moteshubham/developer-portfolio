import React from 'react';

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-6">
    <h2 className="text-2xl font-semibold">{title}</h2>
    {subtitle && <p className="text-zinc-400 mt-1">{subtitle}</p>}
  </div>
);

export default SectionHeader;


