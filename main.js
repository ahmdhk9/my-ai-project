function handleRequest() {
  const input = document.getElementById("userInput").value.trim();
  const output = document.getElementById("output");

  if (!input) {
    output.textContent = "الرجاء إدخال طلبك.";
    return;
  }

  // محاكاة استجابة الذكاء الصناعي
  output.textContent = `جاري إنشاء: ${input}\n\n(هذه نسخة أولية من الاستجابة، وسيتم دمج الذكاء الصناعي لاحقاً لتوليد التطبيقات بشكل فعلي.)`;
}
