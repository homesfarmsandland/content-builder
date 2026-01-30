import { FiExternalLink } from 'react-icons/fi';

const Footer = ({ toolName = 'Internal Tool' }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex md:sticky bottom-0 left-0 right-0 py-4 border-t border-neutral-700 bg-neutral-900 z-10">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-neutral-400">
          {toolName} for {' '}
          <a
            href="https://homesfarmsandland.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 underline inline-flex items-center gap-1"
          >
            homesfarmsandland.com
            <FiExternalLink className="w-3 h-3" />
          </a>
          <span className="hidden md:inline mx-2">•</span>
          <span className="md:hidden inline"><br></br></span>
          © {currentYear} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
