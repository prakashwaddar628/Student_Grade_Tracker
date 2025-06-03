from grading import Grading

if __name__ == "__main__":
    score = float(input("Enter score: "))
    print(f"Grade: {Grading(score)}")
