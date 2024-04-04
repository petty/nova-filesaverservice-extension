# File Saver Service Extension for Nova

File Saver Service is meant to help automate post-save functionality.

The use case I'm using this for is related to prettier-eslint & prettier; but instead of using an extension to handle those types of tasks, I'm executing a shell script that does exactly what each project requires.  There's a lot that can be done from one shell script to execute tasks across multiple projects.

## Requirements:

1. Create this file `/usr/local/bin/novascripts`

2. Then change permissions to executable: `chmod +x /usr/local/bin/novascripts`

3. Run this command to edit that file in Nova: `nova /usr/local/bin/novascripts`

4. Add your script to that file ...

The extension will execute that script on _every_ file saved.

In the example below, I'm restricting what happens to files ending with ".js" and I'm restricting that to a particular directory.

## Example of `novascripts` file:

```sh

#!/bin/bash

## Functions

startsWithPrefixAndEndsWithSuffix() {
	local string="$1"
	local prefix="$2"
	local suffix="$3"

	if [[ "$string" == "$prefix"* && "$string" == *"$suffix" ]]; then
		return 0 # true
	else
		return 1 # false
	fi
}

## Processing

if [ $# -eq 0 ]; then

	echo "No files passed as arguments to this script"
	exit 1

else

	# Just for site project #1
	siteProject1="/Users/johnnyappleseed/Documents/site-project"
	js=".js"

	if startsWithPrefixAndEndsWithSuffix "$1" "$siteProject1" "$js"; then
		cd $siteProject1
		yarn prettier-eslint --write $1
	fi
fi
```

## Extension Installation:

1. Open Nova.
2. Choose menu **Extensions** > **Extension Library...**
3. Search extension `FileSaverService`
5. Click **Install**.

## Usage:

Saving files automatically calls the shell script above.

The less "work" in that script, the faster it will execute, the example above table under a second -- which seems ok.
