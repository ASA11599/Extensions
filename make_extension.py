import os

PATH = os.getcwd()

if __name__ == "__main__":

    print()

    ans = input("create extension ? (y/n) ")

    while ans.lower() != "n":

        print()

        ext_name = input("Enter a name for your extension: ")
        ext_dir = PATH + "\\" + ext_name

        os.mkdir(ext_dir)
        print(ext_dir + " created")
        os.chdir(ext_dir)

        manifest_content = "{}"

        os.system("echo " + manifest_content + " > manifest.json")
        print("manifest.json created at " + ext_dir)
        os.system("echo " + "window.alert('Hello World!');" + " > " + ext_name.lower() + ".js")
        print(ext_name.lower() + ".js created at " + ext_dir)

        print()
        ans = input("create another extension ? (y/n) ")