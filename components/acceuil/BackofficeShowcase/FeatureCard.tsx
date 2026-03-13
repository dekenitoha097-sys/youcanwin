import React from 'react';

const FeatureCard = ({ icon: Icon, title, description }: { icon: React.ComponentType<any>; title: string; description: string }) => (
  <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-start text-left">
    <div className="bg-green-50 p-3 rounded-lg mb-6">
      <Icon className="w-6 h-6 text-green-600" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-gray-500 leading-relaxed">
      {description}
    </p>
  </div>
);

export default FeatureCard;
