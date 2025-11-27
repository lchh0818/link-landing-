import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-row bg-gray1000 justify-center items-center px-[24px] py-[48px]">
      <div className="w-full flex flex-col md:flex-row justify-between items-center max-w-[1400px] gap-[16px]">
        <Image className="dark:hidden" src="/link-logo/logo-full.svg" alt="link" width={120} height={40} />
        <Image className="hidden dark:block" src="/link-logo/logo-full-dark.svg" alt="link" width={120} height={40} />
        <div className="flex flex-col items-center md:items-end gap-[16px]">
          <div className="flex flex-row gap-[16px]">
            <Link href="mailto:conatact@link-circle.com" className="ease-in-out duration-500 hover:opacity-50">
              <FontAwesomeIcon icon={faEnvelope} className="w-[32px] h-[32px] text-link-white" />
            </Link>
            <Link
              href="https://www.instagram.com/link.abroad/ "
              className="ease-in-out duration-500 hover:opacity-50"
              target="_blank"
              rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="w-[32px] h-[32px] text-link-white" />
            </Link>
          </div>
          <span className="text-item text-link-white text-center">
            Copyright © 2023-{currentYear} Link All rights reserved.
          </span>
          <span className="text-item text-link-white text-center">
            Developed by{' '}
            <Link
              href="https://github.com/sspzoa"
              className="ease-in-out duration-500 hover:opacity-50"
              target="_blank"
              rel="noreferrer">
              sspzoa
            </Link>{' '}
          </span>
        </div>
      </div>
    </div>
  );
}
