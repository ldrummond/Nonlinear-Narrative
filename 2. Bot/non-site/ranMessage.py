import sys, os, re, random
from haikus import HaikuText

def validateProgram():
    if len(sys.argv) < 2:
        sys.exit("Usage: " + str(sys.argv[0]) + "filename")
    else:
        filename = sys.argv[1]
        if not os.path.exists(filename):
            sys.exit("Error: File " + str(sys.argv[1]) + " not found")
        else:
            return filename


# ranInt = random.randint(0, 32000)
# count = 0
filename = validateProgram()

with open(filename) as f:
        fileText = ""
        for line in f:
            fileText += line.split(",")[0] + "\n"




# print fileText
# haikuObj = HaikuText(text=fileText)
# haikus = haikuObj.get_haikus()

# if haikus > 0:
#     print haikus[0]

i = 0
while i < 50:
    count = 0
    ranInt = random.random()*35000

    with open(filename) as f:
        
        for line in f:
            count += 1
            if (int(count) == int(ranInt)):
                text = line.split(",")[0]
                print text

                # if (re.match(r"[A-Z]+", text) > 0):
                #     print text

    i += 1



