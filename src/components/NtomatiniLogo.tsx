import React, { useState } from 'react';

interface NtomatiniLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showSubtext?: boolean;
}

export const NtomatiniLogo: React.FC<NtomatiniLogoProps> = ({
  className = '',
  size = 'md',
  showSubtext = true,
}) => {
  const [imgFailed, setImgFailed] = useState(false);

  // Scale map
  const sizeClasses = {
    sm: 'h-10 max-h-10',
    md: 'h-16 max-h-16',
    lg: 'h-24 max-h-24',
    xl: 'h-32 max-h-32',
    hero: 'h-32 sm:h-40 md:h-48 max-h-52',
  };

  // Render /logo.png directly if available
  if (!imgFailed) {
    return (
      <div className={`inline-flex items-center justify-center select-none ${className}`}>
        <img
          src="/logo.png"
          alt="Ντοματίνι - φαΐ στο κουτί"
          className={`${sizeClasses[size]} w-auto object-contain drop-shadow-xs transition-transform duration-300 hover:scale-[1.02]`}
          onError={() => setImgFailed(true)}
        />
      </div>
    );
  }

  // Exact vector recreation of the original logo on pure transparent/white background
  return (
    <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 500 215"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses[size]} w-auto max-w-full drop-shadow-xs transition-transform duration-300 hover:scale-[1.02]`}
        aria-label="Ντοματίνι - φαΐ στο κουτί"
      >
        {/* Three Steam Dots above left of 'N' */}
        <circle cx="58" cy="68" r="4.2" fill="#111111" />
        <circle cx="73" cy="50" r="3.2" fill="#111111" />
        <circle cx="83" cy="64" r="3.8" fill="#111111" />

        {/* Letter 'N' - Exact brush stroke */}
        <path
          d="M 52 144 C 48 141 46 132 47 114 C 48 93 54 82 66 79 C 78 76 89 82 98 96 C 105 106 112 118 119 131 C 122 136 125 137 127 134 C 133 126 141 106 148 88 C 151 81 156 77 161 78 C 166 79 168 85 166 94 C 162 109 152 132 144 142 C 137 150 128 150 121 140 C 113 128 106 114 99 104 C 92 94 86 89 79 89 C 71 89 66 97 66 113 C 65 129 65 140 63 144 C 61 148 55 148 52 144 Z"
          fill="#111111"
        />

        {/* Letter 'τ' */}
        <path
          d="M 148 94 C 157 92 166 92 174 92 C 177 92 178 95 175 97 C 170 101 165 104 162 110 C 157 120 156 128 160 133 C 163 136 168 135 171 131 C 173 129 175 131 173 135 C 168 142 158 144 152 137 C 146 129 146 116 151 103 C 153 99 151 96 147 96 C 144 96 144 94 148 94 Z"
          fill="#111111"
        />

        {/* The Tomato (representing the letter 'ο') */}
        <g id="tomato">
          {/* Shadow */}
          <ellipse cx="193" cy="147" rx="34" ry="6" fill="#000000" opacity="0.06" />

          {/* Plump Red Tomato Body */}
          <circle cx="192" cy="116" r="37" fill="#6e1919" />

          {/* Bottom-left White Highlight Crescent */}
          <path
            d="M 166 120 C 163 134 171 144 186 146 C 196 147 206 143 213 138 C 210 140 198 147 186 145 C 173 143 165 134 167 122 C 168 118 170 118 166 120 Z"
            fill="#FFFFFF"
            opacity="0.9"
          />

          {/* Green Calyx & Stem on top of tomato */}
          <g id="calyx" fill="#3B8E3A">
            {/* Center Curved Pedicel / Stem */}
            <path
              d="M 191 88 C 190 80 193 74 199 71 C 201 70 203 72 201 75 C 198 79 195 84 194 88 Z"
              fill="#2E7D32"
            />
            {/* Left-pointing Leaf */}
            <path d="M 192 88 C 182 85 174 87 168 90 C 175 92 182 92 188 91 Z" />
            {/* Top-left Leaf */}
            <path d="M 192 88 C 184 96 182 103 181 109 C 186 103 190 98 192 92 Z" />
            {/* Right-pointing Leaf */}
            <path d="M 192 88 C 195 95 199 101 205 104 C 202 98 200 93 195 89 Z" />
            {/* Far-right Leaf */}
            <path d="M 192 88 C 200 87 207 89 214 84 C 207 84 200 84 195 87 Z" />
          </g>
        </g>

        {/* Letter 'μ' with deep descending left stroke */}
        <path
          d="M 226 96 C 229 112 231 132 232 153 C 232 157 226 157 225 152 C 224 133 222 113 220 97 C 219 93 225 91 226 96 Z"
          fill="#111111"
        />
        <path
          d="M 232 115 C 239 105 249 101 260 106 C 265 108 269 114 270 121 C 271 131 272 139 274 144 C 275 148 268 150 266 145 C 264 139 263 129 262 121 C 261 114 256 110 250 111 C 243 112 237 118 234 127 L 234 145 C 234 150 226 150 226 145 L 226 117 Z"
          fill="#111111"
        />

        {/* Letter 'α' */}
        <path
          d="M 280 117 C 274 122 270 130 271 139 C 273 146 279 150 287 149 C 295 147 301 140 304 132 C 305 129 305 124 304 119 C 301 112 291 110 283 115 C 277 119 275 126 277 134 C 279 141 285 143 291 141 C 297 139 300 133 301 127 C 302 134 304 143 310 146 C 314 148 316 144 314 141 C 310 136 309 128 309 120 C 309 113 301 113 299 118 C 297 113 288 111 280 117 Z"
          fill="#111111"
        />

        {/* Letter 'τ' (second) */}
        <path
          d="M 314 111 C 322 109 332 109 339 109 C 342 109 342 112 339 114 C 335 117 331 120 329 126 C 326 134 326 142 330 146 C 333 149 338 147 341 144 C 344 141 345 145 342 149 C 336 155 325 155 319 147 C 314 138 315 125 320 115 C 318 115 313 115 312 113 C 311 111 312 111 314 111 Z"
          fill="#111111"
        />

        {/* Letter 'ί' with acute accent */}
        <g id="accented-iota">
          {/* Acute Accent Mark */}
          <path
            d="M 353 85 C 358 80 366 73 371 70 C 374 69 376 72 373 75 C 368 81 360 89 355 92 C 352 93 351 88 353 85 Z"
            fill="#111111"
          />
          {/* Iota Stem */}
          <path
            d="M 351 107 C 354 105 360 105 360 111 C 360 121 358 133 360 143 C 361 148 364 150 368 148 C 372 146 373 151 369 154 C 362 159 352 157 350 146 C 348 134 349 120 350 110 C 350 107 350 107 351 107 Z"
            fill="#111111"
          />
        </g>

        {/* Letter 'ν' */}
        <path
          d="M 377 113 C 381 109 387 114 386 121 C 385 132 386 142 392 146 C 397 148 402 144 405 137 C 409 127 411 116 412 105 C 412 100 420 100 420 105 C 419 118 416 133 411 145 C 405 155 394 159 384 154 C 376 149 376 138 377 125 C 378 119 374 116 377 113 Z"
          fill="#111111"
        />

        {/* Letter 'ι' with extended curving tail */}
        <path
          d="M 428 107 C 433 103 438 107 437 114 C 435 125 434 136 436 146 C 438 152 445 154 450 150 C 455 147 457 152 453 156 C 446 163 433 162 427 151 C 424 139 425 124 427 112 C 427 109 426 108 428 107 Z"
          fill="#111111"
        />

        {/* Hand-drawn Subtitle: "φαΐ στο κουτί" */}
        {showSubtext && (
          <g id="subtext-exact-drawing" fill="#111111">
            {/* φ */}
            <circle cx="264" cy="182" r="7" stroke="#111111" strokeWidth="3" fill="none" />
            <path d="M 264 170 L 264 198" stroke="#111111" strokeWidth="3" strokeLinecap="round" />

            {/* α */}
            <path
              d="M 278 184 C 275 180 279 174 285 175 C 290 176 292 181 292 186 L 292 192 M 292 183 C 288 180 280 181 280 186 C 280 191 285 192 291 190"
              stroke="#111111"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />

            {/* ΐ (with 2 dots and accent) */}
            <circle cx="300" cy="170" r="1.5" fill="#111111" />
            <circle cx="306" cy="170" r="1.5" fill="#111111" />
            <path d="M 302 166 L 305 163" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M 303 176 L 303 192" stroke="#111111" strokeWidth="2.8" strokeLinecap="round" />

            {/* space */}
            {/* σ */}
            <path
              d="M 326 177 C 322 174 316 177 316 183 C 316 190 324 191 328 189"
              stroke="#111111"
              strokeWidth="2.8"
              strokeLinecap="round"
              fill="none"
            />

            {/* τ */}
            <path d="M 333 176 L 344 176 M 338 176 L 338 192" stroke="#111111" strokeWidth="2.8" strokeLinecap="round" />

            {/* ο */}
            <ellipse cx="352" cy="184" rx="5.5" ry="6" stroke="#111111" strokeWidth="2.8" fill="none" />

            {/* space */}
            {/* κ */}
            <path d="M 368 174 L 368 192 M 377 178 L 369 184 L 377 192" stroke="#111111" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />

            {/* ο */}
            <ellipse cx="388" cy="184" rx="5.5" ry="6" stroke="#111111" strokeWidth="2.8" fill="none" />

            {/* υ */}
            <path d="M 399 177 C 399 185 401 191 406 191 C 411 191 413 185 413 177 L 413 192" stroke="#111111" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />

            {/* τ */}
            <path d="M 420 176 L 431 176 M 425 176 L 425 192" stroke="#111111" strokeWidth="2.8" strokeLinecap="round" />

            {/* ί (with accent) */}
            <path d="M 436 170 L 439 167" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M 437 176 L 437 192" stroke="#111111" strokeWidth="2.8" strokeLinecap="round" />
          </g>
        )}
      </svg>
    </div>
  );
};
