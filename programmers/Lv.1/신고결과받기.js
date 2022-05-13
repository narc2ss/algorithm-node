function solution(id_list, report, k) {
  report = [...new Set(report)];
  const users = id_list.reduce((acc, cur) => {
    acc[cur] = [0, [], 0];
    return acc;
  }, {});

  report.forEach((v) => {
    const [id, reporter] = v.split(" ");
    users[reporter][0]++;
    users[reporter][1].push(id);
  });

  Object.entries(users).forEach(([, v]) => {
    if (v[0] >= k) {
      v[1].forEach((id) => {
        users[id][2]++;
      });
    }
  });

  const answer = Object.entries(users).reduce((acc, [, v]) => {
    acc.push(v[2]);
    return acc;
  }, []);

  return answer;
}
