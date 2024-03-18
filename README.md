# 보건소 위치 안내 서비스

## 배포

- vercel()

## 활용 기술
- 네이버 지도 API
- FireBase storage
- Next.js (14)
- TailWind
- SWR
- TypeScript
- SASS
- copy-to-clipboard
- Git/GitHub
- 공공 API (보건소 API)

## 프로젝트 빌드시 주의사항

- Next.js 14 버전 Vercel 배포 적용 예외처리
```tsx
// Next.js 13 버전 이상 처리
import { Suspense } from "react";

        {/* Next.js 13 이상 버전 처리 */}
        <Suspense fallback={<>Loading...</>}>
          <MapSection />
        </Suspense>
```