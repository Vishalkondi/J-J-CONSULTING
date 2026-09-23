/** Subtle static data-network decoration for dark hero backgrounds. Decorative only. */
const nodes: Array<[number, number]> = [
  [620, 70],
  [700, 150],
  [790, 90],
  [860, 200],
  [940, 130],
  [1010, 250],
  [1090, 170],
  [1150, 60],
  [760, 300],
  [880, 340],
  [980, 400],
  [1100, 330],
  [1170, 250],
];
const links: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [1, 8],
  [3, 9],
  [5, 10],
  [6, 11],
  [11, 12],
  [9, 10],
  [8, 9],
  [4, 6],
  [2, 4],
  [10, 11],
];

export function NetworkOverlay() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[62%] opacity-[0.35] md:block"
      viewBox="560 0 660 460"
      preserveAspectRatio="xMaxYMid slice"
    >
      <g stroke="#8FB0D6" strokeOpacity="0.35" strokeWidth="1" fill="none">
        {links.map(([a, b]) => (
          <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />
        ))}
      </g>
      <g fill="#8FB0D6">
        {nodes.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 4 === 0 ? 3.5 : 2.2} fillOpacity={i % 4 === 0 ? 0.8 : 0.5} />
        ))}
      </g>
    </svg>
  );
}
