import { useEffect, useRef } from 'react';

export default function HeroText() {
  const subRef    = useRef(null);
  const line1Ref  = useRef(null);
  const line2Ref  = useRef(null);
  const startedRef = useRef(false); // 애니메이션 중복 실행 방지

  useEffect(() => {
    if (startedRef.current) return; // 이미 실행됐으면 무시
    startedRef.current = true;

    const sub   = subRef.current;
    const line1 = line1Ref.current;
    const line2 = line2Ref.current;
    if (!sub || !line1 || !line2) return;

    // ── 1. 소제목 페이드인 + 위로 올라오기 ──
    setTimeout(() => fadeInUp(sub, 900), 200);

    // ── 2. JIN 타이핑 ────────────────────
    setTimeout(() => {
      typeText(line1, 'JIN', 130, (cursor) => {
        cursor.remove(); // JIN 끝나면 커서 즉시 제거

        // ── 3. YUN-SEO 타이핑 ──────────────
        setTimeout(() => {
          typeText(line2, 'YUN-SEO', 100, (cursor2) => {

            // ── 4. 커서 즉시 제거 ────────────
            cursor2.remove();
          });
        }, 200);
      });
    }, 1100);

  }, []);

  return (
    <div style={{ display:'flex', flexDirection:'column', gap:'4px' }}>
      <span
        ref={subRef}
        style={{
          fontSize: '18px',
          letterSpacing: '0.2em',
          color: '#555',
          display: 'block',
          minHeight: '18px',
          opacity: 0,                     // 초기값 — JS가 올려줌
          transform: 'translateY(10px)',  // 초기값 — JS가 올려줌
        }}
      >
        한 조각의 퍼즐
      </span>
      <p ref={line1Ref} style={nameStyle} />
      <p ref={line2Ref} style={nameStyle} />
    </div>
  );
}

const nameStyle = {
  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
  fontWeight: '700',
  lineHeight: '1.1',
  color: '#111',
  margin: '0',
  minHeight: '1.2em',
};

// ─────────────────────────────────────────
// 유틸 함수
// ─────────────────────────────────────────

function fadeInUp(el, duration) {
  const start = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.style.opacity   = eased;
    el.style.transform = `translateY(${(1 - eased) * 10}px)`;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function fadeOut(el, duration, cb) {
  const start = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    el.style.opacity = 1 - progress;
    if (progress < 1) requestAnimationFrame(step);
    else cb?.();
  }
  requestAnimationFrame(step);
}

function typeText(el, text, speed, cb) {
  el.textContent = '';

  const cursor = document.createElement('span');
  Object.assign(cursor.style, {
    display: 'inline-block',
    width: '3px',
    height: '0.85em',
    backgroundColor: '#111',
    marginLeft: '3px',
    verticalAlign: 'text-bottom',
  });
  el.appendChild(cursor);

  let visible = true;
  const blinkTimer = setInterval(() => {
    cursor.style.opacity = visible ? '0' : '1';
    visible = !visible;
  }, 350);

  let i = 0;
  const typeTimer = setInterval(() => {
    el.insertBefore(document.createTextNode(text[i]), cursor);
    i++;
    if (i >= text.length) {
      clearInterval(typeTimer);
      clearInterval(blinkTimer);
      cursor.style.opacity = '1';
      cb?.(cursor);
    }
  }, speed);
}