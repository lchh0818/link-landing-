import Image from 'next/image';
import Link from 'next/link';

export default function Onboarding() {
  return (
    <div className="bg-[url('/images/background2.png')] bg-cover h-screen flex justify-center items-center px-[24px]">
      <div className="max-w-[1400px] w-full flex flex-col items-start md:items-center md:flex-row gap-[30px] ">
        <Image className="hidden md:block" src="/link-logo/logo-text.svg" alt="linkLogo" width={222} height={97} />
        <Image className="block md:hidden" src="/link-logo/logo-text.svg" alt="linkLogo" width={148} height={65} />
        <hr className="bg-[#f9f8fe] w-full h-[3px] rounded-full" />
        <div className="flex flex-col gap-[30px] md:gap-[40px] items-start md:items-end">
          <span className="text-nowrap text-left md:text-right text-title text-[#f9f8fe]">
            미래의 창업가를
            <br />
            연결하다
          </span>
          <Link href="#apply">
            <div className="px-[40px] py-[12px] rounded-full border border-[#19172633] bg-[#f9f8fe] text-item text-[#191726] ease-in-out duration-500 hover:opacity-50">
              Demo Day 신청하기
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
