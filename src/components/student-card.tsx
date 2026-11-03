import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type StudentCardProps = {
  id: string;
  name: string;
  year: string;
  photoUrl: any;
  flagged: boolean;
  onToggleFlag: (id: string) => void;
};

export default function StudentCard({
  id,
  name,
  year,
  photoUrl,
  flagged,
  onToggleFlag,
}: StudentCardProps) {
  return (
    <View style={styles.card}>
      <Image source={photoUrl} style={styles.photo} />

      <View style={styles.studentInfo}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.year}>{year}</Text>

        <Pressable
          onPress={() => onToggleFlag(id)}
          style={({ pressed }) => [
            styles.button,
            flagged && styles.flaggedButton,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.buttonText}>
            {flagged ? "Flagged" : "Flag for Advising"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 12,
    marginBottom: 12,
    borderRadius: 12,
    elevation: 2,
  },
  photo: {
    width: 65,
    height: 65,
    borderRadius: 10,
  },
  studentInfo: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222222",
  },
  year: {
    fontSize: 14,
    color: "#666666",
    marginTop: 4,
  },
  button: {
    backgroundColor: "#2563EB",
    padding: 9,
    borderRadius: 7,
    marginTop: 8,
    alignSelf: "flex-start",
  },
  flaggedButton: {
    backgroundColor: "#16A34A",
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 12,
  },
});
