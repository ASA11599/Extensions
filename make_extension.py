import os

PATH = os.getcwd()

if __name__ == "__main__":

    dir_lst = os.listdir(PATH)

    if "manifest_template.json" not in dir_lst:
        print("manifest_template.json not in this directory")
        exit()

    print()

    ans = input("create extension ? (y/n) ")

    while ans.lower() != "n":

        print()

        ext_name = input("Enter a name for your extension: ")
        ext_dir = PATH + os.sep + ext_name

        os.mkdir(ext_dir)
        print(ext_dir + " created")

        os.system("type manifest_template.json > " + ext_dir + os.sep + "manifest.json")
        print("manifest.json created at " + ext_dir)
        os.system("echo window.alert('Hello World!'); > " + ext_dir + os.sep + ext_name.lower() + ".js")
        print(ext_name.lower() + ".js created at " + ext_dir)

        print()
        ans = input("create another extension ? (y/n) ")