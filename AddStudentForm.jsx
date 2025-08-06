import React, { useState } from 'react';


function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const[mark,setmark]=useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age) {
      onAddStudent({ name, age: parseInt(age),mark:parseInt(mark) });
      setName('');
      setAge('');
      setmark('');
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Mark"
        value={mark}
        onChange={(e) => setmark(e.target.value)}
        required
      />
      <button type="submit">Add Student</button>
    </form>
  );
}


export default AddStudentForm;