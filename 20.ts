let programmingLanguages: string[] = ['JavaScript', 'Python', 'Java', 'TypeScript', 'C++', 'Ruby', 'Swift', 'Go', 'Rust'];

console.log("List of Programming Languages:");
programmingLanguages.forEach((language, index) => {
    console.log(`${index + 1}. ${language}`);
});
