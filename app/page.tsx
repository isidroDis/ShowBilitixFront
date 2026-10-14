'use client'
import { useEffect, useState } from "react";
import { getAllStudentsFromBackend, type Student } from "@/api/student";
import Link from "next/link";

export default function Home() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    let ignore = false;
    getAllStudentsFromBackend()
      .then((data) => {
        if (!ignore) setStudents(data);
      })
      .catch((e: unknown) => {
        if (!ignore) {
          setError(e instanceof Error ? e.message : "Request failed");
        }
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });
    return () => {
      ignore = true;
    };
  }, []);

  const reload = () => {
    setLoading(true);
    setError(null);
    getAllStudentsFromBackend()
      .then(setStudents)
      .catch((e: unknown) =>
        setError(e instanceof Error ? e.message : "Request failed")
      )
      .finally(() => setLoading(false));
  };

  const filtered = students.filter((s) =>
    `${s.stud_last_name} ${s.stud_first_name} ${s.crs_code}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-1 flex-col items-center gap-4 bg-zinc-50 p-8 font-sans dark:bg-black">
      <div className="flex items-center gap-2">
        <button
          onClick={reload}
          className="rounded border border-zinc-300 px-3 py-1 text-sm dark:border-zinc-700"
        >
          Reload
        </button>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter by name or course"
          className="rounded border border-zinc-300 px-3 py-1 text-sm dark:border-zinc-700 dark:bg-zinc-900"
        />
      </div>

      {loading && <p className="text-sm text-zinc-500">Loading…</p>}
      {error && <p className="text-sm text-red-600">{error}</p>}

      <table className="w-full max-w-4xl border-collapse text-sm">
        <thead>
          <tr className="border-b border-zinc-300 text-left dark:border-zinc-700">
            {/* <th className="p-2">ID</th> */}
            <th className="p-2">School ID</th>
            <th className="p-2">Last Name</th>
            <th className="p-2">First Name</th>
            <th className="p-2">Course</th>
            <th className="p-2">Address</th>
            <th className="p-2">DOB</th>
            <th className="p-2 text-right">Balance</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((s) => (
            <tr
              key={s.stud_id}
              className="border-b border-zinc-200 dark:border-zinc-800"
            >
              {/* <td className="p-2">{s.stud_id}</td> */}
              <td className="p-2">{s.stud_school_id}</td>
              <td className="p-2">{s.stud_last_name}</td>
              <td className="p-2">{s.stud_first_name}</td>
              <td className="p-2">{s.crs_code}</td>
              <td className="p-2">{s.stud_address}</td>
              <td className="p-2">{s.stud_dob}</td>
              <td className="p-2 text-right">{s.stud_balance}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {!loading && filtered.length === 0 && (
        <p className="text-sm text-zinc-500">No students.</p>
      )}




      <Link href='./about?name=Giann&address=talisayan'>About</Link>
    </div>
  );
}
