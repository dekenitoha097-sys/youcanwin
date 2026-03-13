import { Settings2 } from 'lucide-react';

const BackofficeHeader = () => {
  return (
    <>
      <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-medium mb-8">
        <Settings2 size={16} />
        <span>Backoffice tout-en-un</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
        Gérez tout depuis une interface unique
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
        Notre backoffice intuitif vous permet de créer, configurer et piloter vos 
        campagnes en toute autonomie
      </p>
    </>
  );
};

export default BackofficeHeader;
