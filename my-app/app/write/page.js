export default function write() {
  return (
    <div className="p-20">
      <h4>글작성</h4>
      <form action="/api/write/new" method="POST">
        <input type="text" name="title" placeholder="제목" />
        <input type="text" name="content" placeholder="내용" />
        <button type="submit">저장</button>
      </form>
    </div>
  );
}
