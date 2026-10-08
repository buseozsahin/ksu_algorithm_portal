export interface Subtitle {
  id: number
  title: string
}

export interface Module {
  id: number
  title: string
  subtitles: Subtitle[]
}

export const modules: Module[] = [
  {
    id: 1,
    title: 'Module 01',
    subtitles: [
      { id: 1, title: 'Foundations' },
      { id: 2, title: 'Frameworks' },
      { id: 3, title: 'Correctness' },
    ],
  },

  {
    id: 2,
    title: 'Module 02',
    subtitles: [
      { id: 1, title: 'Asymptotic Notation' },
      { id: 2, title: 'Growth of Functions' },
    ],
  },

  {
    id: 3,
    title: 'Module 03',
    subtitles: [
      { id: 1, title: 'Divide-and-Conquer' },
      { id: 2, title: 'Recurrence Relations' },
    ],
  },

  {
    id: 4,
    title: 'Module 04',
    subtitles: [
      { id: 1, title: 'The Master Method' },
      { id: 2, title: 'Advanced Recurrences' },
    ],
  },
  
  {
    id: 5,
    title: 'Module 05',
    subtitles: [
      { id: 1, title: 'Probabilistic Analysis' },
      { id: 2, title: 'Randomized Quicksort' },
    ],
  },

  {
    id: 6,
    title: 'Module 06',
    subtitles: [
      { id: 1, title: 'Sorting in Linear Time' },
      { id: 2, title: 'Order Statistics' },
    ],
  },

  {
    id: 7,
    title: 'Module 07',
    subtitles: [
      { id: 1, title: 'Dynamic Programming (DP)' },
    ],
  },

  {
    id: 8,
    title: 'Module 08',
    subtitles: [
      { id: 1, title: 'Greedy Algorithms' },
      { id: 2, title: 'Huffman Coding' },
    ],
  },

  {
    id: 9,
    title: 'Module 09',
    subtitles: [
      { id: 1, title: 'Graph Infrastructure' },
      { id: 2, title: 'MSTs' },
      { id: 3, title: 'Shortest Paths' },
    ],
  },

  {
    id: 10,
    title: 'Module 10',
    subtitles: [
      { id: 1, title: 'String Matching' },
      { id: 2, title: 'Pattern Search' },
    ],
  },

  {
    id: 11,
    title: 'Module 11',
    subtitles: [
      { id: 1, title: 'Intractability' },
      { id: 2, title: 'NP-Completeness' },
      { id: 3, title: 'Reductions' },
    ],
  },

  {
    id: 12,
    title: 'Module 12',
    subtitles: [
      { id: 1, title: 'Heuristic Optimization ' },
      { id: 2, title: 'Genetic Algorithms' },
    ],
  },
]