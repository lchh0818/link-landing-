'use client';

import { useIntersection } from '@/hooks/useIntersection';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Clubs() {
  const refs = [
    useIntersection<HTMLDivElement>(),
    useIntersection<HTMLDivElement>(),
    useIntersection<HTMLDivElement>(),
  ];
  return (
    <div className="flex flex-col gap-[48px] py-[150px] justify-center items-center">
      <span ref={refs[0]} className="text-paragraph text-center">
        <strong className="text-link-purple">2025년 Link</strong>는{' '}
        <strong>
          한국디지털미디어고등학교, 부산소프트웨어마이스터고등학교, 선린인터넷고등학교,
          <br className="hidden md:block" />
          미림마이스터고등학교, 경북소프트웨어마이스터고등학교,단국대학교부속소프트웨어고등학교의
          10개 동아리
        </strong>
        와 함께합니다.
      </span>
      <div ref={refs[2]} className="max-w-4xl flex flex-wrap justify-center items-center gap-8 md:gap-24">
        <img className="w-12 md:w-16" src="/club-logo/LUNA.svg" />
        <img className="w-12 md:w-16" src="/club-logo/mrmr.svg" />   
        <img className="w-12 md:w-16" src="/club-logo/just.png" />
        <img className="w-12 md:w-16" src="/club-logo/miven.png" />
        <img className="w-12 md:w-16" src="/club-logo/tapey.svg" />
        <img className="h-6 md:h-8" src="/club-logo/devcoop.svg" />

        <img className="w-12 md:w-16" src="/club-logo/absolute.svg" />
        <img className="w-12 md:w-10" src="/club-logo/BFD.svg" />
        <img className="w-12 md:w-16" src="/club-logo/cpu.png" />
        <img className="w-12 md:w-16" src="/club-logo/noid.png" />
      </div>
    </div>
  );
}
