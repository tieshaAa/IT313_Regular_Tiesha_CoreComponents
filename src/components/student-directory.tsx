import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import AnaPhoto from "../../assets/students/ana.jpg";
import BeaPhoto from "../../assets/students/bea.jpg";
import CidPhoto from "../../assets/students/cid.jpg";
import DexPhoto from "../../assets/students/dex.jpg";
import EliPhoto from "../../assets/students/eli.jpg";
import StudentCard from "./student-card";

type Student = {
  id: string;
  name: string;
  year: string;
  photoUrl: any;
  flagged: boolean;
};

const initialStudents: Student[] = [
  {
    id: "s1",
    name: "Ana Cruz",
    year: "3rd Year",
    photoUrl: AnaPhoto,
    flagged: false,
  },
  {
    id: "s2",
    name: "Bea Santos",
    year: "2nd Year",
    photoUrl: BeaPhoto,
    flagged: false,
  },
  {
    id: "s3",
    name: "Cid Ramos",
    year: "4th Year",
    photoUrl: CidPhoto,
    flagged: false,
  },
  {
    id: "s4",
    name: "Dex Alonzo",
    year: "1st Year",
    photoUrl: DexPhoto,
    flagged: false,
  },
  {
    id: "s5",
    name: "Eli Tan",
    year: "3rd Year",
    photoUrl: EliPhoto,
    flagged: false,
  },
];

export default function StudentDirectory() {
  const [students, setStudents] = useState(initialStudents);
  const [query, setQuery] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(query.toLowerCase()),
  );

  const toggleFlag = (id: string) => {
    setStudents((currentStudents) =>
      currentStudents.map((student) =>
        student.id === id ? { ...student, flagged: !student.flagged } : student,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Directory</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search student name..."
        value={query}
        onChangeText={setQuery}
      />

      <ScrollView>
        {filteredStudents.map((student) => (
          <StudentCard
            key={student.id}
            id={student.id}
            name={student.name}
            year={student.year}
            photoUrl={student.photoUrl}
            flagged={student.flagged}
            onToggleFlag={toggleFlag}
          />
        ))}

        {filteredStudents.length === 0 && (
          <Text style={styles.emptyText}>No students found.</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    padding: 16,
    paddingTop: 55,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 18,
  },
  searchInput: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  emptyText: {
    textAlign: "center",
    color: "#666666",
    marginTop: 25,
  },
});
