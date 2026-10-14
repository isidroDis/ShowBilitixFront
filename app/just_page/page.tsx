'use client';

import { useSearchParams } from "next/navigation";

const JustPage = () => {
// const router = useSearchParams();
//  const name = router.get('name');
  const name = sessionStorage.name;
  const address = sessionStorage.address;
  return(
    <div>
      Logged-in
      <h1>Hello, {name}</h1>
      <h2>We have arrived at our destination: {address}</h2>
    </div>

  );

}

export default JustPage;
