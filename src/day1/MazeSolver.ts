const directions = [
  [0, 1], // up
  [1, 0], // right
  [0, -1], // down
  [-1, 0], // left
];

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
  // 1. Base Case
  // of the map
  if (curr.x < 0 || curr.x > maze[0].length || curr.y < 0 || curr.y > maze.length) {
    return false;
  }

  // on a wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }

  if (curr.x === end.x && curr.y === end.y) {
    path.push(end);
    return true;
  }

  if (seen[curr.y][curr.x]) {
    return false;
  }

  // 2. Recursive Case
  // 3 recurse steps

  // pre
  seen[curr.y][curr.x] = true;
  path.push(curr);

  // recurse step
  for (let i = 0; i < directions.length; i++) {
    const [x, y] = directions[i];
    if (walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)) {
      return true;
    }
  }

  // post
  path.pop();

  return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
  const seen: boolean[][] = [];
  const path: Point[] = [];

  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }

  walk(maze, wall, start, end, seen, path);

  return path;
}
