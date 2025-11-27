'use client';

import { useIntersection } from '@/hooks/useIntersection';
import Image from 'next/image';

export default function Previous() {
  const refs = [
    useIntersection<HTMLDivElement>(),
    useIntersection<HTMLDivElement>(),
    useIntersection<HTMLDivElement>(),
    useIntersection<HTMLDivElement>(),
    useIntersection<HTMLDivElement>(),
  ];
  return (
    <div
      id="previous"
      className="flex flex-col py-[160px] w-full max-w-[1000px] justify-center items-center gap-[80px] md:gap-[120px]">
      <div className="flex flex-col gap-[15px] md:gap-[45px] justify-center items-center">
        <span ref={refs[0]} className="text-description text-gray500">
          Link Demo Day
        </span>
        <span ref={refs[1]} className="text-header text-gray1000">
          지난 행사
        </span>
      </div>
      <div className="w-full flex flex-col items-center gap-[80px] md:gap-[120px]">
        <div ref={refs[2]} className="w-full flex flex-col gap-[25px] md:flex-row md:items-center justify-between">
          <div className="flex flex-col gap-[25px]">
            <span className="text-header">
              미래의 창업가를 <span className="text-link-purple">연결</span>하다
            </span>
            <span className="text-paragraph">
              약 130명가량의 미래의 창업가들이 모여,
              <br />
              다양한 경험과 비전을 공유하고, 서로 네트워킹하는
              <br />
              시간을 보낼 수 있었습니다.
            </span>
          </div>
          <Image className="rounded-[32px] shadow-2xl" src="/images/link.png" alt="link" width={500} height={320} />
        </div>
        <div ref={refs[3]} className="w-full flex flex-col gap-[25px] md:flex-row md:items-center justify-between">
          <div className="flex flex-col gap-[25px]">
            <span className="text-header">
              다양한 동아리의 <span className="text-link-purple">만남</span>
            </span>
            <span className="text-paragraph">
              한국디지털미디어고등학교를 중심으로 5개의
              <br />
              학교에서 총 8곳의 동아리가 참가하여,
              <br />
              서로의 활동을 공유하였습니다.
            </span>
          </div>
          <Image className="rounded-[32px] shadow-2xl" src="/images/club.jpg" alt="club" width={500} height={320} />
        </div>
        <div ref={refs[4]} className="w-full flex flex-col gap-[25px] md:flex-row md:items-center justify-between">
          <div className="flex flex-col gap-[25px]">
            <span className="text-header">
              창업가 졸업생을 <span className="text-link-purple">만나다</span>
            </span>
            <span className="text-paragraph">
              현업에 종사하시는 졸업생 연사를 초청하여
              <br />
              생생한 창업 경험 이야기를 나누었습니다.
            </span>
          </div>
          <Image
            className="rounded-[32px] shadow-2xl"
            src="/images/speaker.jpg"
            alt="speaker"
            width={500}
            height={320}
          />
        </div>
      </div>
    </div>
  );
}
