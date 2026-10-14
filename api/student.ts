import axios from 'axios';
export type Student = {
  stud_id: number;
  stud_school_id: string;
  stud_last_name: string;
  stud_first_name: string;
  stud_course_id: number;
  stud_address: string;
  stud_dob: string;
  stud_balance: string;
  crs_code: string;
};

const backApi = "http://localhost/showbilitix/api";

export const getAllStudentsFromBackend = async (): Promise<Student[]> => {
  const response = await axios.get(`${backApi}/student.php`, {
    params: { operation: "getAllStudents" },
  });
  return response.data;
};

export const addNewStudent = async (student : Student): Promise<Student[]> => {
  data = new FormData();
  
  const response = await axios.post(`${backApi}/student.php`,{
    
  })
}
