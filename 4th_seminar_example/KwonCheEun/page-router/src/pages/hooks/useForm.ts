import { useState, useCallback } from "react";

// 폼 입력 값 타입 정의
interface FormValues {
  name: string;
  email: string;
}

export function useForm(initialValues: FormValues) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [submittedData, setSubmittedData] = useState<FormValues[]>([]); // 제출된 데이터 저장 배열

  // 입력 값 변경 함수 (최적화를 위해 useCallback 적용)
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }, []);

  // 폼 제출 함수 (이전 제출된 데이터 저장)
  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      console.log("폼 제출됨:", values);
      setSubmittedData((prevData) => [...prevData, values]); // 새로운 데이터 추가
      setValues(initialValues); // 폼 리셋
    },
    [values, initialValues]
  );

  // 이전 제출된 모든 데이터를 출력하는 함수
  const logSubmittedData = () => {
    console.log("지금까지 제출된 모든 데이터:", submittedData);
  };

  return { values, handleChange, handleSubmit, logSubmittedData };
}