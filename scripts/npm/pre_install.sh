#!/bin/bash

#
# Install Ruby gems
#
echo "Installing Ruby gems dependencies..."

# Gem: scss_lint
if gem list | grep scss_lint;
then echo "Gem 'scss_lint' already exists.";
else sudo gem install scss_lint;
fi
