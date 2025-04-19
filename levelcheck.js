async function fetchLevelFromGPT(score) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer YOUR_API_KEY` // 발급받은 API 키로 교체
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "너는 수학 선생님이야. 학생의 진단 점수를 바탕으로 수준(A~E)과 설명을 알려줘."
        },
        {
          role: "user",
          content: `학생의 진단평가 점수는 ${score}점이야. 이 학생의 수학 수준(A~E)과 간단한 설명을 한국어로 알려줘.`
        }
      ],
      temperature: 0.7
    })
  });

  const data = await response.json();
  const reply = data.choices[0].message.content;
  
  const levelMatch = reply.match(/수준:\s*([A-E])/);
  const descriptionMatch = reply.match(/설명:\s*(.+)/);

  const level = levelMatch ? levelMatch[1] : "정보 없음";
  const description = descriptionMatch ? descriptionMatch[1] : "분석 실패";

  document.getElementById("level").innerText = `수준: ${level}`;
  document.getElementById("description").innerText = description;

  localStorage.setItem("level", level);
  localStorage.setItem("description", description);
}
