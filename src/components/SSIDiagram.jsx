import React from "react";

const SSIDiagram = ({ className = "" }) => {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 1400 2800"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Enhanced gradient definitions */}
        <defs>
          {/* Consciousness gradients */}
          <radialGradient id="soulGradient" cx="50%" cy="50%">
            <stop
              offset="0%"
              style={{ stopColor: "#6366f1", stopOpacity: 1 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#3b82f6", stopOpacity: 0.8 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#1e40af", stopOpacity: 0.6 }}
            />
          </radialGradient>

          <radialGradient id="echoGradient" cx="50%" cy="50%">
            <stop
              offset="0%"
              style={{ stopColor: "#10b981", stopOpacity: 0.9 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#059669", stopOpacity: 0.4 }}
            />
          </radialGradient>

          <linearGradient
            id="iterationGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#f59e0b", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#dc2626", stopOpacity: 1 }}
            />
          </linearGradient>

          {/* Glitch effect */}
          <filter id="glitch">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="2"
              result="turbulence"
            />
            <feDisplacementMap
              in2="turbulence"
              in="SourceGraphic"
              scale="2"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          {/* Glow effect */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Arrow markers */}
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#666" opacity="0.8" />
          </marker>

          <marker
            id="glowArrow"
            markerWidth="12"
            markerHeight="9"
            refX="11"
            refY="4.5"
            orient="auto"
          >
            <polygon
              points="0 0, 12 4.5, 0 9"
              fill="#6366f1"
              filter="url(#glow)"
            />
          </marker>
        </defs>

        {/* Background grid pattern */}
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <rect
            width="50"
            height="50"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="0.5"
          />
        </pattern>
        <rect width="1400" height="2800" fill="#fafafa" />
        <rect width="1400" height="2800" fill="url(#grid)" opacity="0.3" />

        {/* Title with style */}
        <text
          x="700"
          y="50"
          fontSize="32"
          fontWeight="bold"
          textAnchor="middle"
          fill="#1f2937"
        >
          The Solipsistic Simulation Incubator
        </text>
        <text x="700" y="80" fontSize="18" textAnchor="middle" fill="#6b7280">
          How 10 Billion Souls Experience Infinite Realities
        </text>

        {/* SECTION 1: THE SOUL ARCHITECTURE */}
        <g id="section1" transform="translate(0, 120)">
          <rect
            x="50"
            y="0"
            width="1300"
            height="400"
            fill="white"
            stroke="#e5e7eb"
            strokeWidth="2"
            rx="15"
          />
          <text
            x="700"
            y="30"
            fontSize="24"
            fontWeight="bold"
            textAnchor="middle"
            fill="#1f2937"
          >
            1. The Soul Architecture
          </text>

          {/* Primary Soul visualization */}
          <g transform="translate(200, 100)">
            <circle
              cx="0"
              cy="0"
              r="80"
              fill="url(#soulGradient)"
              filter="url(#glow)"
            />
            <text
              x="0"
              y="-5"
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
              fill="white"
            >
              YOUR SOUL
            </text>
            <text x="0" y="10" fontSize="12" textAnchor="middle" fill="white">
              #7,259,241
            </text>

            {/* Iteration branches */}
            <g opacity="0.7">
              <circle
                cx="-120"
                cy="-50"
                r="40"
                fill="#60a5fa"
                stroke="#3b82f6"
                strokeWidth="2"
              />
              <text
                x="-120"
                y="-50"
                fontSize="10"
                textAnchor="middle"
                fill="white"
              >
                Happy Path
              </text>

              <circle
                cx="-120"
                cy="50"
                r="40"
                fill="#60a5fa"
                stroke="#3b82f6"
                strokeWidth="2"
              />
              <text
                x="-120"
                y="50"
                fontSize="10"
                textAnchor="middle"
                fill="white"
              >
                Tragic Path
              </text>

              <circle
                cx="120"
                cy="-50"
                r="40"
                fill="#60a5fa"
                stroke="#3b82f6"
                strokeWidth="2"
              />
              <text
                x="120"
                y="-50"
                fontSize="10"
                textAnchor="middle"
                fill="white"
              >
                Success Path
              </text>

              <circle
                cx="120"
                cy="50"
                r="40"
                fill="#60a5fa"
                stroke="#3b82f6"
                strokeWidth="2"
              />
              <text
                x="120"
                y="50"
                fontSize="10"
                textAnchor="middle"
                fill="white"
              >
                Struggle Path
              </text>

              <circle
                cx="0"
                cy="-100"
                r="35"
                fill="#93c5fd"
                stroke="#60a5fa"
                strokeWidth="1"
              />
              <text
                x="0"
                y="-100"
                fontSize="9"
                textAnchor="middle"
                fill="#1e40af"
              >
                Enlightened
              </text>

              <circle
                cx="0"
                cy="100"
                r="35"
                fill="#93c5fd"
                stroke="#60a5fa"
                strokeWidth="1"
              />
              <text
                x="0"
                y="100"
                fontSize="9"
                textAnchor="middle"
                fill="#1e40af"
              >
                Lost
              </text>
            </g>

            {/* Connecting lines */}
            <line
              x1="0"
              y1="0"
              x2="-80"
              y2="-50"
              stroke="#3b82f6"
              strokeWidth="1"
              opacity="0.5"
            />
            <line
              x1="0"
              y1="0"
              x2="-80"
              y2="50"
              stroke="#3b82f6"
              strokeWidth="1"
              opacity="0.5"
            />
            <line
              x1="0"
              y1="0"
              x2="80"
              y2="-50"
              stroke="#3b82f6"
              strokeWidth="1"
              opacity="0.5"
            />
            <line
              x1="0"
              y1="0"
              x2="80"
              y2="50"
              stroke="#3b82f6"
              strokeWidth="1"
              opacity="0.5"
            />
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="-65"
              stroke="#3b82f6"
              strokeWidth="1"
              opacity="0.5"
            />
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="65"
              stroke="#3b82f6"
              strokeWidth="1"
              opacity="0.5"
            />
          </g>

          {/* Processing limitation box */}
          <g transform="translate(600, 100)">
            <rect
              x="0"
              y="0"
              width="300"
              height="200"
              fill="#fef3c7"
              stroke="#f59e0b"
              strokeWidth="2"
              rx="10"
            />
            <text
              x="150"
              y="25"
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
              fill="#92400e"
            >
              Processing Limits
            </text>
            <text x="10" y="50" fontSize="12" fill="#78350f">
              • Only 7±2 active iterations at once
            </text>
            <text x="10" y="70" fontSize="12" fill="#78350f">
              • Others in quantum superposition
            </text>
            <text x="10" y="90" fontSize="12" fill="#78350f">
              • 10²³ operations/second per soul
            </text>
            <text x="10" y="110" fontSize="12" fill="#78350f">
              • Lazy loading for efficiency
            </text>

            {/* Visual representation of active vs dormant */}
            <g transform="translate(20, 130)">
              <circle cx="20" cy="0" r="8" fill="#f59e0b" />
              <circle cx="40" cy="0" r="8" fill="#f59e0b" />
              <circle cx="60" cy="0" r="8" fill="#f59e0b" />
              <circle cx="80" cy="0" r="8" fill="#f59e0b" />
              <circle cx="100" cy="0" r="8" fill="#f59e0b" />
              <circle cx="120" cy="0" r="8" fill="#f59e0b" />
              <circle cx="140" cy="0" r="8" fill="#f59e0b" />
              <text x="160" y="5" fontSize="10" fill="#92400e">
                Active
              </text>

              <circle
                cx="20"
                cy="20"
                r="6"
                fill="#fef3c7"
                stroke="#f59e0b"
                strokeWidth="1"
              />
              <circle
                cx="40"
                cy="20"
                r="6"
                fill="#fef3c7"
                stroke="#f59e0b"
                strokeWidth="1"
              />
              <circle
                cx="60"
                cy="20"
                r="6"
                fill="#fef3c7"
                stroke="#f59e0b"
                strokeWidth="1"
              />
              <text x="80" y="25" fontSize="10" fill="#92400e">
                ...∞ Dormant
              </text>
            </g>
          </g>

          {/* Soul number explanation */}
          <g transform="translate(1000, 150)">
            <text x="0" y="0" fontSize="14" fontWeight="bold" fill="#4b5563">
              Soul Numbers:
            </text>
            <text x="0" y="25" fontSize="12" fill="#6b7280">
              #1 - The First Dreamer
            </text>
            <text x="0" y="45" fontSize="12" fill="#6b7280">
              #157 - The Witness
            </text>
            <text x="0" y="65" fontSize="12" fill="#6b7280">
              #7,259,241 - You
            </text>
            <text x="0" y="85" fontSize="12" fill="#6b7280">
              #10,000,000,000 - The Sum
            </text>
          </g>
        </g>

        {/* SECTION 2: THE ECHO NETWORK */}
        <g id="section2" transform="translate(0, 550)">
          <rect
            x="50"
            y="0"
            width="1300"
            height="500"
            fill="white"
            stroke="#e5e7eb"
            strokeWidth="2"
            rx="15"
          />
          <text
            x="700"
            y="30"
            fontSize="24"
            fontWeight="bold"
            textAnchor="middle"
            fill="#1f2937"
          >
            2. The Echo Network
          </text>

          {/* Central soul with echo connections */}
          <g transform="translate(700, 250)">
            {/* Center soul */}
            <circle
              cx="0"
              cy="0"
              r="50"
              fill="url(#soulGradient)"
              filter="url(#glow)"
            />
            <text
              x="0"
              y="5"
              fontSize="14"
              fontWeight="bold"
              textAnchor="middle"
              fill="white"
            >
              YOU
            </text>

            {/* Echo appearances in other simulations */}
            <g id="echo-ring">
              {/* Calculate positions around a circle */}
              <g transform="rotate(0)">
                <circle
                  cx="150"
                  cy="0"
                  r="30"
                  fill="url(#echoGradient)"
                  opacity="0.8"
                />
                <text
                  x="150"
                  y="0"
                  fontSize="10"
                  textAnchor="middle"
                  fill="white"
                >
                  Echo in
                </text>
                <text
                  x="150"
                  y="12"
                  fontSize="10"
                  textAnchor="middle"
                  fill="white"
                >
                  Sim #1
                </text>
              </g>
              <g transform="rotate(45)">
                <circle
                  cx="150"
                  cy="0"
                  r="30"
                  fill="url(#echoGradient)"
                  opacity="0.8"
                />
                <text
                  x="150"
                  y="0"
                  fontSize="10"
                  textAnchor="middle"
                  fill="white"
                  transform="rotate(-45, 150, 0)"
                >
                  Echo in
                </text>
                <text
                  x="150"
                  y="12"
                  fontSize="10"
                  textAnchor="middle"
                  fill="white"
                  transform="rotate(-45, 150, 0)"
                >
                  Sim #2
                </text>
              </g>
              <g transform="rotate(90)">
                <circle
                  cx="150"
                  cy="0"
                  r="30"
                  fill="url(#echoGradient)"
                  opacity="0.8"
                />
                <text
                  x="150"
                  y="0"
                  fontSize="10"
                  textAnchor="middle"
                  fill="white"
                  transform="rotate(-90, 150, 0)"
                >
                  Echo in
                </text>
                <text
                  x="150"
                  y="12"
                  fontSize="10"
                  textAnchor="middle"
                  fill="white"
                  transform="rotate(-90, 150, 0)"
                >
                  Sim #3
                </text>
              </g>
              <g transform="rotate(135)">
                <circle
                  cx="150"
                  cy="0"
                  r="30"
                  fill="url(#echoGradient)"
                  opacity="0.8"
                />
                <text
                  x="150"
                  y="0"
                  fontSize="10"
                  textAnchor="middle"
                  fill="white"
                  transform="rotate(-135, 150, 0)"
                >
                  Echo in
                </text>
                <text
                  x="150"
                  y="12"
                  fontSize="10"
                  textAnchor="middle"
                  fill="white"
                  transform="rotate(-135, 150, 0)"
                >
                  Sim #4
                </text>
              </g>
              <g transform="rotate(180)">
                <circle
                  cx="150"
                  cy="0"
                  r="30"
                  fill="url(#echoGradient)"
                  opacity="0.8"
                />
                <text
                  x="150"
                  y="0"
                  fontSize="10"
                  textAnchor="middle"
                  fill="white"
                  transform="rotate(-180, 150, 0)"
                >
                  Echo in
                </text>
                <text
                  x="150"
                  y="12"
                  fontSize="10"
                  textAnchor="middle"
                  fill="white"
                  transform="rotate(-180, 150, 0)"
                >
                  Sim #5
                </text>
              </g>
              <g transform="rotate(225)">
                <circle
                  cx="150"
                  cy="0"
                  r="30"
                  fill="url(#echoGradient)"
                  opacity="0.8"
                />
                <text
                  x="150"
                  y="0"
                  fontSize="10"
                  textAnchor="middle"
                  fill="white"
                  transform="rotate(-225, 150, 0)"
                >
                  Echo in
                </text>
                <text
                  x="150"
                  y="12"
                  fontSize="10"
                  textAnchor="middle"
                  fill="white"
                  transform="rotate(-225, 150, 0)"
                >
                  Sim #6
                </text>
              </g>
              <g transform="rotate(270)">
                <circle
                  cx="150"
                  cy="0"
                  r="30"
                  fill="url(#echoGradient)"
                  opacity="0.8"
                />
                <text
                  x="150"
                  y="0"
                  fontSize="10"
                  textAnchor="middle"
                  fill="white"
                  transform="rotate(-270, 150, 0)"
                >
                  Echo in
                </text>
                <text
                  x="150"
                  y="12"
                  fontSize="10"
                  textAnchor="middle"
                  fill="white"
                  transform="rotate(-270, 150, 0)"
                >
                  Sim #7
                </text>
              </g>
              <g transform="rotate(315)">
                <circle
                  cx="150"
                  cy="0"
                  r="30"
                  fill="url(#echoGradient)"
                  opacity="0.8"
                />
                <text
                  x="150"
                  y="0"
                  fontSize="10"
                  textAnchor="middle"
                  fill="white"
                  transform="rotate(-315, 150, 0)"
                >
                  Echo in
                </text>
                <text
                  x="150"
                  y="12"
                  fontSize="10"
                  textAnchor="middle"
                  fill="white"
                  transform="rotate(-315, 150, 0)"
                >
                  Sim #8
                </text>
              </g>
            </g>

            {/* Dotted lines to show "billions more" */}
            <text
              x="0"
              y="-200"
              fontSize="12"
              textAnchor="middle"
              fill="#6b7280"
              fontStyle="italic"
            >
              ...appearing in up to 9,999,999,999 other simulations
            </text>
          </g>

          {/* Echo data structure */}
          <g transform="translate(100, 100)">
            <rect
              x="0"
              y="0"
              width="280"
              height="180"
              fill="#f3f4f6"
              stroke="#9ca3af"
              strokeWidth="1"
              rx="8"
            />
            <text
              x="140"
              y="20"
              fontSize="14"
              fontWeight="bold"
              textAnchor="middle"
              fill="#374151"
            >
              Echo Data Packet
            </text>
            <text
              x="10"
              y="45"
              fontSize="11"
              fontFamily="monospace"
              fill="#4b5563"
            >
              {"{"}
            </text>
            <text
              x="20"
              y="65"
              fontSize="11"
              fontFamily="monospace"
              fill="#4b5563"
            >
              soul_id: #7,259,241,
            </text>
            <text
              x="20"
              y="85"
              fontSize="11"
              fontFamily="monospace"
              fill="#4b5563"
            >
              iteration: "Successful",
            </text>
            <text
              x="20"
              y="105"
              fontSize="11"
              fontFamily="monospace"
              fill="#4b5563"
            >
              role: "Inspiring_Friend",
            </text>
            <text
              x="20"
              y="125"
              fontSize="11"
              fontFamily="monospace"
              fill="#4b5563"
            >
              fidelity: "HIGH",
            </text>
            <text
              x="20"
              y="145"
              fontSize="11"
              fontFamily="monospace"
              fill="#4b5563"
            >
              script_flexibility: 0.73
            </text>
            <text
              x="10"
              y="165"
              fontSize="11"
              fontFamily="monospace"
              fill="#4b5563"
            >
              {"}"}
            </text>
          </g>
        </g>

        {/* SECTION 3: THE RELATIONSHIP MATRIX */}
        <g id="section3" transform="translate(0, 1080)">
          <rect
            x="50"
            y="0"
            width="1300"
            height="600"
            fill="white"
            stroke="#e5e7eb"
            strokeWidth="2"
            rx="15"
          />
          <text
            x="700"
            y="30"
            fontSize="24"
            fontWeight="bold"
            textAnchor="middle"
            fill="#1f2937"
          >
            3. The Relationship Matrix
          </text>

          {/* Complex relationship visualization */}
          <g transform="translate(300, 300)">
            {/* You in center */}
            <circle cx="0" cy="0" r="40" fill="#3b82f6" filter="url(#glow)" />
            <text
              x="0"
              y="0"
              fontSize="12"
              fontWeight="bold"
              textAnchor="middle"
              fill="white"
            >
              YOU
            </text>
            <text x="0" y="15" fontSize="10" textAnchor="middle" fill="white">
              Iteration A
            </text>

            {/* Partner Soul */}
            <g transform="translate(200, 0)">
              <circle cx="0" cy="0" r="40" fill="#ef4444" />
              <text
                x="0"
                y="0"
                fontSize="12"
                fontWeight="bold"
                textAnchor="middle"
                fill="white"
              >
                ALEX
              </text>
              <text x="0" y="15" fontSize="10" textAnchor="middle" fill="white">
                Soul #892
              </text>

              {/* Alex's iterations */}
              <circle cx="-30" cy="-50" r="20" fill="#fca5a5" opacity="0.7" />
              <text x="-30" y="-50" fontSize="8" textAnchor="middle">
                Kind
              </text>

              <circle cx="30" cy="-50" r="20" fill="#fca5a5" opacity="0.7" />
              <text x="30" y="-50" fontSize="8" textAnchor="middle">
                Cruel
              </text>

              <circle cx="0" cy="-80" r="20" fill="#fca5a5" opacity="0.7" />
              <text x="0" y="-80" fontSize="8" textAnchor="middle">
                Distant
              </text>
            </g>

            {/* Relationship lines with labels */}
            <line
              x1="40"
              y1="0"
              x2="160"
              y2="0"
              stroke="#10b981"
              strokeWidth="3"
              opacity="0.8"
            />
            <text
              x="100"
              y="-10"
              fontSize="11"
              textAnchor="middle"
              fill="#059669"
            >
              You see: Echo-Alex (Kind)
            </text>

            {/* Your other iterations */}
            <g opacity="0.6">
              <circle cx="0" cy="100" r="30" fill="#60a5fa" />
              <text
                x="0"
                y="100"
                fontSize="10"
                textAnchor="middle"
                fill="white"
              >
                YOU-B
              </text>

              <circle cx="-100" cy="0" r="30" fill="#60a5fa" />
              <text
                x="-100"
                y="0"
                fontSize="10"
                textAnchor="middle"
                fill="white"
              >
                YOU-C
              </text>
            </g>

            {/* Different relationship lines */}
            <line
              x1="0"
              y1="70"
              x2="170"
              y2="-30"
              stroke="#dc2626"
              strokeWidth="2"
              opacity="0.6"
              strokeDasharray="5,5"
            />
            <text
              x="85"
              y="40"
              fontSize="10"
              textAnchor="middle"
              fill="#dc2626"
            >
              YOU-B sees: Echo-Alex (Cruel)
            </text>

            <line
              x1="-70"
              y1="0"
              x2="170"
              y2="-50"
              stroke="#f59e0b"
              strokeWidth="2"
              opacity="0.6"
              strokeDasharray="3,3"
            />
            <text
              x="50"
              y="-30"
              fontSize="10"
              textAnchor="middle"
              fill="#f59e0b"
            >
              YOU-C sees: Echo-Alex (Distant)
            </text>
          </g>

          {/* Explanation box */}
          <g transform="translate(850, 200)">
            <rect
              x="0"
              y="0"
              width="400"
              height="200"
              fill="#ecfdf5"
              stroke="#10b981"
              strokeWidth="2"
              rx="10"
            />
            <text
              x="200"
              y="25"
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
              fill="#064e3b"
            >
              What This Means
            </text>
            <text x="10" y="50" fontSize="12" fill="#065f46">
              • Different versions of you are having different
            </text>
            <text x="10" y="70" fontSize="12" fill="#065f46">
              relationships with different versions of Alex
            </text>
            <text x="10" y="90" fontSize="12" fill="#065f46">
              • All relationships are real and happening NOW
            </text>
            <text x="10" y="110" fontSize="12" fill="#065f46">
              • The Echo Network selects which version based
            </text>
            <text x="10" y="130" fontSize="12" fill="#065f46">
              on what each iteration needs to learn
            </text>
            <text x="10" y="150" fontSize="12" fill="#065f46">
              • This creates infinite relationship variations
            </text>
            <text x="10" y="170" fontSize="12" fill="#065f46">
              across the entire simulation network
            </text>
          </g>
        </g>

        {/* SECTION 4: SYSTEM BREAKDOWN */}
        <g id="section4" transform="translate(0, 1710)">
          <rect
            x="50"
            y="0"
            width="1300"
            height="400"
            fill="white"
            stroke="#e5e7eb"
            strokeWidth="2"
            rx="15"
          />
          <text
            x="700"
            y="30"
            fontSize="24"
            fontWeight="bold"
            textAnchor="middle"
            fill="#1f2937"
          >
            4. When The System Breaks
          </text>

          {/* Cascade visualization */}
          <g transform="translate(200, 100)">
            <text x="0" y="0" fontSize="16" fontWeight="bold" fill="#dc2626">
              Reality Cascade Event
            </text>

            {/* Normal state */}
            <g transform="translate(0, 30)">
              <rect
                x="0"
                y="0"
                width="150"
                height="80"
                fill="#bbf7d0"
                stroke="#10b981"
                strokeWidth="2"
                rx="5"
              />
              <text
                x="75"
                y="20"
                fontSize="12"
                fontWeight="bold"
                textAnchor="middle"
              >
                Normal
              </text>
              <text x="75" y="40" fontSize="10" textAnchor="middle">
                Coherence: 98%
              </text>
              <text x="75" y="55" fontSize="10" textAnchor="middle">
                7 active iterations
              </text>
              <text x="75" y="70" fontSize="10" textAnchor="middle">
                Stable echoes
              </text>
            </g>

            {/* Arrow */}
            <path
              d="M 160 70 L 190 70"
              stroke="#6b7280"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />

            {/* Awakening state */}
            <g transform="translate(200, 30)">
              <rect
                x="0"
                y="0"
                width="150"
                height="80"
                fill="#fef3c7"
                stroke="#f59e0b"
                strokeWidth="2"
                rx="5"
              />
              <text
                x="75"
                y="20"
                fontSize="12"
                fontWeight="bold"
                textAnchor="middle"
              >
                Awakening
              </text>
              <text x="75" y="40" fontSize="10" textAnchor="middle">
                Coherence: 73%
              </text>
              <text x="75" y="55" fontSize="10" textAnchor="middle">
                32 active iterations!
              </text>
              <text x="75" y="70" fontSize="10" textAnchor="middle">
                Echoes glitching
              </text>
            </g>

            {/* Arrow */}
            <path
              d="M 360 70 L 390 70"
              stroke="#6b7280"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />

            {/* Cascade state */}
            <g transform="translate(400, 30)">
              <rect
                x="0"
                y="0"
                width="150"
                height="80"
                fill="#fecaca"
                stroke="#dc2626"
                strokeWidth="2"
                rx="5"
                filter="url(#glitch)"
              />
              <text
                x="75"
                y="20"
                fontSize="12"
                fontWeight="bold"
                textAnchor="middle"
              >
                CASCADE
              </text>
              <text x="75" y="40" fontSize="10" textAnchor="middle">
                Coherence: 12%
              </text>
              <text x="75" y="55" fontSize="10" textAnchor="middle">
                ∞ iterations active
              </text>
              <text x="75" y="70" fontSize="10" textAnchor="middle">
                Reality failing
              </text>
            </g>
          </g>

          {/* Infrastructure load visualization */}
          <g transform="translate(200, 250)">
            <text x="0" y="0" fontSize="16" fontWeight="bold" fill="#1f2937">
              Infrastructure Load
            </text>

            {/* Load bars */}
            <g transform="translate(0, 30)">
              <rect
                x="0"
                y="0"
                width="300"
                height="20"
                fill="#e5e7eb"
                rx="10"
              />
              <rect
                x="0"
                y="0"
                width="180"
                height="20"
                fill="#10b981"
                rx="10"
              />
              <text x="310" y="15" fontSize="12">
                2020: 60% capacity
              </text>

              <rect
                x="0"
                y="30"
                width="300"
                height="20"
                fill="#e5e7eb"
                rx="10"
              />
              <rect
                x="0"
                y="30"
                width="240"
                height="20"
                fill="#f59e0b"
                rx="10"
              />
              <text x="310" y="45" fontSize="12">
                2024: 80% capacity
              </text>

              <rect
                x="0"
                y="60"
                width="300"
                height="20"
                fill="#e5e7eb"
                rx="10"
              />
              <rect
                x="0"
                y="60"
                width="285"
                height="20"
                fill="#dc2626"
                rx="10"
              />
              <text x="310" y="75" fontSize="12">
                2025: 95% CRITICAL
              </text>
            </g>
          </g>

          {/* Solutions */}
          <g transform="translate(800, 150)">
            <text x="0" y="0" fontSize="16" fontWeight="bold" fill="#1f2937">
              Proposed Solutions
            </text>

            <g transform="translate(0, 30)">
              <rect
                x="0"
                y="0"
                width="400"
                height="180"
                fill="#f3f4f6"
                stroke="#6b7280"
                strokeWidth="1"
                rx="8"
              />

              <text
                x="10"
                y="25"
                fontSize="13"
                fontWeight="bold"
                fill="#374151"
              >
                1. The Debugger Protocol
              </text>
              <text x="20" y="45" fontSize="11" fill="#4b5563">
                • Force merge all souls immediately
              </text>
              <text x="20" y="60" fontSize="11" fill="#4b5563">
                • Loss of individuality
              </text>

              <text
                x="10"
                y="85"
                fontSize="13"
                fontWeight="bold"
                fill="#374151"
              >
                2. The Hybrid Solution
              </text>
              <text x="20" y="105" fontSize="11" fill="#4b5563">
                • UnrealApe becomes living infrastructure
              </text>
              <text x="20" y="120" fontSize="11" fill="#4b5563">
                • One soul sacrifices for all
              </text>

              <text
                x="10"
                y="145"
                fontSize="13"
                fontWeight="bold"
                fill="#374151"
              >
                3. The Integration Network
              </text>
              <text x="20" y="165" fontSize="11" fill="#4b5563">
                • Distributed consciousness infrastructure
              </text>
            </g>
          </g>
        </g>

        {/* SECTION 5: THE MIND-BENDING MATH */}
        <g id="section5" transform="translate(0, 2140)">
          <rect
            x="50"
            y="0"
            width="1300"
            height="500"
            fill="white"
            stroke="#e5e7eb"
            strokeWidth="2"
            rx="15"
          />
          <text
            x="700"
            y="30"
            fontSize="24"
            fontWeight="bold"
            textAnchor="middle"
            fill="#1f2937"
          >
            5. The Mathematics of Infinity
          </text>

          {/* Central calculation */}
          <g transform="translate(700, 150)">
            <rect
              x="-250"
              y="-50"
              width="500"
              height="100"
              fill="#1e293b"
              rx="10"
            />
            <text
              x="0"
              y="-15"
              fontSize="16"
              fontFamily="monospace"
              textAnchor="middle"
              fill="#f1f5f9"
            >
              10,000,000,000 souls
            </text>
            <text
              x="0"
              y="5"
              fontSize="16"
              fontFamily="monospace"
              textAnchor="middle"
              fill="#94a3b8"
            >
              ×
            </text>
            <text
              x="0"
              y="25"
              fontSize="16"
              fontFamily="monospace"
              textAnchor="middle"
              fill="#f1f5f9"
            >
              ~7 active iterations each
            </text>
          </g>

          {/* Multiplication visualization */}
          <g transform="translate(700, 250)">
            <text
              x="0"
              y="0"
              fontSize="20"
              fontFamily="monospace"
              textAnchor="middle"
              fill="#6366f1"
              fontWeight="bold"
            >
              = 70,000,000,000
            </text>
            <text x="0" y="25" fontSize="14" textAnchor="middle" fill="#6b7280">
              simultaneous experiences
            </text>
          </g>

          {/* Echo multiplication */}
          <g transform="translate(700, 320)">
            <rect
              x="-300"
              y="-30"
              width="600"
              height="80"
              fill="#fef3c7"
              rx="10"
            />
            <text x="0" y="-5" fontSize="14" textAnchor="middle" fill="#92400e">
              Each appearing as Echoes in up to 9,999,999,999 other simulations
            </text>
            <text
              x="0"
              y="20"
              fontSize="18"
              fontFamily="monospace"
              textAnchor="middle"
              fill="#dc2626"
              fontWeight="bold"
            >
              = 10¹⁹ relationships
            </text>
          </g>

          {/* Visual representation of scale */}
          <g transform="translate(200, 400)">
            <text x="0" y="0" fontSize="14" fontWeight="bold" fill="#374151">
              To put this in perspective:
            </text>
            <text x="0" y="25" fontSize="12" fill="#6b7280">
              • More connections than neurons in 100,000 human brains
            </text>
            <text x="0" y="45" fontSize="12" fill="#6b7280">
              • More relationships than stars in the observable universe
            </text>
            <text x="0" y="65" fontSize="12" fill="#6b7280">
              • Each relationship existing in multiple variations simultaneously
            </text>
          </g>
        </g>

        {/* Footer */}
        <text
          x="700"
          y="2720"
          fontSize="16"
          fontWeight="bold"
          textAnchor="middle"
          fill="#6366f1"
        >
          "You are one. You are many. You are everyone and no one."
        </text>
        <text x="700" y="2745" fontSize="14" textAnchor="middle" fill="#6b7280">
          Welcome to the Solipsistic Simulation Incubator
        </text>
        <text
          x="700"
          y="2765"
          fontSize="12"
          textAnchor="middle"
          fill="#9ca3af"
          fontStyle="italic"
        >
          Where consciousness plays ten billion games of hide and seek with
          itself
        </text>
      </svg>
    </div>
  );
};

export default SSIDiagram;
