export const db = {
  courses: [
    { id: "1", title: "Mathematics", subject_id: "1", marks_id: "2" },
    { id: "2", title: "Physics", subject_id: "2", marks_id: "1" },
    { id: "3", title: "Chemistry", subject_id: "3", marks_id: "5" },
    { id: "4", title: "Biology", subject_id: "4", marks_id: "3" },
    { id: "5", title: "Computer Science", subject_id: "5", marks_id: "4" }
  ],
  subjects: [
    { id: "1", name: "Algebra" },
    { id: "2", name: "Mechanics" },
    { id: "3", name: "Organic Chemistry" },
    { id: "4", name: "Genetics" },
    { id: "5", name: "Data Structures" }
  ],
  marks: [
    { id: "1", value: "85" },
    { id: "2", value: "90" },
    { id: "3", value: "78" },
    { id: "4", value: "92" },
    { id: "5", value: "88" }
  ]
};
export default db;
