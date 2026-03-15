import React from 'react';
import BackofficeHeader from './BackofficeHeader';
import FeatureGrid from './FeatureGrid';
import FeatureBar from './FeatureBar';

const BackofficeShowcase = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <BackofficeHeader />
        <FeatureGrid />
      </div>
      
      <FeatureBar />
    </div>
  );
};

export default BackofficeShowcase;
