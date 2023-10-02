function fillArrayToMinimum<T>(links: T[], minimum: number): T[] {
  const newLinks: T[] = [];

  for (let i = 0; i < minimum; i++) {
    if (i < links.length) {
      newLinks.push(links[i]);
      continue;
    }

    newLinks.push({} as T);
  }
  
  return newLinks;
}

export default fillArrayToMinimum;