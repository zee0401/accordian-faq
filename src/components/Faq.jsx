export default function Faq({ faq, index, handleCLick, showAns }) {
  return (
    <div className="qna">
      {faq.question}
      <span onClick={() => handleCLick(index)}>{showAns ? "-" : "+"}</span>
      {showAns && <hr />}
      {showAns && <p style={{ margin: "1rem 0.5rem" }}>{faq.answer}</p>}
    </div>
  );
}
