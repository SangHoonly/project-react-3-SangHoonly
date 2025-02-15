export async function fetchProblemInfo({ problemId }) {
  const url = `http://localhost:8000/problem/${problemId.toString()}`;
  const response = await fetch(url);
  const data = response.json();
  return data;
}

export async function fetchSubmitRating(submitFile) {
  const url = 'http://localhost:8000/api/rating';
  const response = await fetch(url, {
    method: 'post',
    body: submitFile,
  });
  const data = response.json();
  return data;
}

export async function fetchProblems() {
  const url = 'http://localhost:8000/problems';
  const response = await fetch(url);
  const data = response.json();
  return data;
}
