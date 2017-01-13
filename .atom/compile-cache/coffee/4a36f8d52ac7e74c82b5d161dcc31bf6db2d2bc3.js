(function() {
  var Shell, exec;

  exec = require('child_process').exec;

  Shell = require('shell');

  module.exports = {
    activate: function(state) {
      atom.commands.add('atom-text-editor', {
        'open-in-browser:open': (function(_this) {
          return function() {
            return _this.open();
          };
        })(this)
      });
      return atom.commands.add('atom-panel', {
        'open-in-browser:open-tree-view': (function(_this) {
          return function() {
            return _this.openTreeView();
          };
        })(this)
      });
    },
    openPath: function(filePath) {
      var process_architecture;
      process_architecture = process.platform;
      switch (process_architecture) {
        case 'darwin':
          return exec('open "' + filePath + '"');
        case 'linux':
          return exec('xdg-open "' + filePath + '"');
        case 'win32':
          return Shell.openExternal('file:///' + filePath);
      }
    },
    open: function() {
      var editor, file, filePath;
      editor = atom.workspace.getActivePaneItem();
      file = editor != null ? editor.buffer.file : void 0;
      filePath = file != null ? file.path : void 0;
      return this.openPath(filePath);
    },
    openTreeView: function() {
      var nuclideFileTree, packageObj, path, ref, treeView;
      packageObj = null;
      if (atom.packages.isPackageLoaded('nuclide-file-tree') === true) {
        nuclideFileTree = atom.packages.getLoadedPackage('nuclide-file-tree');
        path = (ref = nuclideFileTree.contextMenuManager.activeElement) != null ? ref.getAttribute('data-path') : void 0;
        packageObj = {
          selectedPath: path
        };
      }
      if (atom.packages.isPackageLoaded('tree-view') === true) {
        treeView = atom.packages.getLoadedPackage('tree-view');
        treeView = require(treeView.mainModulePath);
        packageObj = treeView.serialize();
      }
      if (typeof packageObj !== 'undefined' && packageObj !== null) {
        if (packageObj.selectedPath) {
          return this.openPath(packageObj.selectedPath);
        }
      }
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL2hvbWUvYW1yLy5hdG9tL3BhY2thZ2VzL29wZW4taW4tYnJvd3Nlci9saWIvb3Blbi1pbi1icm93c2VyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQUE7O0VBQUMsT0FBUSxPQUFBLENBQVEsZUFBUjs7RUFFVCxLQUFBLEdBQVEsT0FBQSxDQUFRLE9BQVI7O0VBRVIsTUFBTSxDQUFDLE9BQVAsR0FFRTtJQUFBLFFBQUEsRUFBVSxTQUFDLEtBQUQ7TUFDUixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQWQsQ0FBa0Isa0JBQWxCLEVBQXNDO1FBQUEsc0JBQUEsRUFBd0IsQ0FBQSxTQUFBLEtBQUE7aUJBQUEsU0FBQTttQkFBRyxLQUFDLENBQUEsSUFBRCxDQUFBO1VBQUg7UUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXhCO09BQXRDO2FBQ0EsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFkLENBQWtCLFlBQWxCLEVBQWdDO1FBQUEsZ0NBQUEsRUFBbUMsQ0FBQSxTQUFBLEtBQUE7aUJBQUEsU0FBQTttQkFBRyxLQUFDLENBQUEsWUFBRCxDQUFBO1VBQUg7UUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQW5DO09BQWhDO0lBRlEsQ0FBVjtJQUlBLFFBQUEsRUFBVSxTQUFDLFFBQUQ7QUFDUixVQUFBO01BQUEsb0JBQUEsR0FBdUIsT0FBTyxDQUFDO0FBQy9CLGNBQU8sb0JBQVA7QUFBQSxhQUNPLFFBRFA7aUJBQ3FCLElBQUEsQ0FBTSxRQUFBLEdBQVMsUUFBVCxHQUFrQixHQUF4QjtBQURyQixhQUVPLE9BRlA7aUJBRW9CLElBQUEsQ0FBTSxZQUFBLEdBQWEsUUFBYixHQUFzQixHQUE1QjtBQUZwQixhQUdPLE9BSFA7aUJBR29CLEtBQUssQ0FBQyxZQUFOLENBQW1CLFVBQUEsR0FBVyxRQUE5QjtBQUhwQjtJQUZRLENBSlY7SUFXQSxJQUFBLEVBQU0sU0FBQTtBQUNKLFVBQUE7TUFBQSxNQUFBLEdBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBZixDQUFBO01BQ1QsSUFBQSxvQkFBTyxNQUFNLENBQUUsTUFBTSxDQUFDO01BQ3RCLFFBQUEsa0JBQVcsSUFBSSxDQUFFO2FBQ2pCLElBQUMsQ0FBQSxRQUFELENBQVUsUUFBVjtJQUpJLENBWE47SUFpQkEsWUFBQSxFQUFjLFNBQUE7QUFDWixVQUFBO01BQUEsVUFBQSxHQUFhO01BQ2IsSUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWQsQ0FBOEIsbUJBQTlCLENBQUEsS0FBc0QsSUFBekQ7UUFDRSxlQUFBLEdBQWtCLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWQsQ0FBK0IsbUJBQS9CO1FBQ2xCLElBQUEseUVBQXVELENBQUUsWUFBbEQsQ0FBK0QsV0FBL0Q7UUFDUCxVQUFBLEdBQWE7VUFBQSxZQUFBLEVBQWEsSUFBYjtVQUhmOztNQUlBLElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFkLENBQThCLFdBQTlCLENBQUEsS0FBOEMsSUFBakQ7UUFDRSxRQUFBLEdBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZCxDQUErQixXQUEvQjtRQUNYLFFBQUEsR0FBVyxPQUFBLENBQVEsUUFBUSxDQUFDLGNBQWpCO1FBQ1gsVUFBQSxHQUFhLFFBQVEsQ0FBQyxTQUFULENBQUEsRUFIZjs7TUFJQSxJQUFHLE9BQU8sVUFBUCxLQUFxQixXQUFyQixJQUFvQyxVQUFBLEtBQWMsSUFBckQ7UUFDRSxJQUFHLFVBQVUsQ0FBQyxZQUFkO2lCQUNFLElBQUMsQ0FBQSxRQUFELENBQVUsVUFBVSxDQUFDLFlBQXJCLEVBREY7U0FERjs7SUFWWSxDQWpCZDs7QUFORiIsInNvdXJjZXNDb250ZW50IjpbIntleGVjfSA9IHJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKVxuXG5TaGVsbCA9IHJlcXVpcmUoJ3NoZWxsJylcblxubW9kdWxlLmV4cG9ydHMgPVxuXG4gIGFjdGl2YXRlOiAoc3RhdGUpIC0+XG4gICAgYXRvbS5jb21tYW5kcy5hZGQgJ2F0b20tdGV4dC1lZGl0b3InLCAnb3Blbi1pbi1icm93c2VyOm9wZW4nOiA9PiBAb3BlbigpXG4gICAgYXRvbS5jb21tYW5kcy5hZGQgJ2F0b20tcGFuZWwnLCAnb3Blbi1pbi1icm93c2VyOm9wZW4tdHJlZS12aWV3JyA6ID0+IEBvcGVuVHJlZVZpZXcoKVxuXG4gIG9wZW5QYXRoOiAoZmlsZVBhdGgpIC0+XG4gICAgcHJvY2Vzc19hcmNoaXRlY3R1cmUgPSBwcm9jZXNzLnBsYXRmb3JtXG4gICAgc3dpdGNoIHByb2Nlc3NfYXJjaGl0ZWN0dXJlXG4gICAgICB3aGVuICdkYXJ3aW4nIHRoZW4gZXhlYyAoJ29wZW4gXCInK2ZpbGVQYXRoKydcIicpXG4gICAgICB3aGVuICdsaW51eCcgdGhlbiBleGVjICgneGRnLW9wZW4gXCInK2ZpbGVQYXRoKydcIicpXG4gICAgICB3aGVuICd3aW4zMicgdGhlbiBTaGVsbC5vcGVuRXh0ZXJuYWwoJ2ZpbGU6Ly8vJytmaWxlUGF0aClcblxuICBvcGVuOiAtPlxuICAgIGVkaXRvciA9IGF0b20ud29ya3NwYWNlLmdldEFjdGl2ZVBhbmVJdGVtKClcbiAgICBmaWxlID0gZWRpdG9yPy5idWZmZXIuZmlsZVxuICAgIGZpbGVQYXRoID0gZmlsZT8ucGF0aFxuICAgIEBvcGVuUGF0aCBmaWxlUGF0aFxuXG4gIG9wZW5UcmVlVmlldzogLT5cbiAgICBwYWNrYWdlT2JqID0gbnVsbFxuICAgIGlmIGF0b20ucGFja2FnZXMuaXNQYWNrYWdlTG9hZGVkKCdudWNsaWRlLWZpbGUtdHJlZScpID09IHRydWVcbiAgICAgIG51Y2xpZGVGaWxlVHJlZSA9IGF0b20ucGFja2FnZXMuZ2V0TG9hZGVkUGFja2FnZSgnbnVjbGlkZS1maWxlLXRyZWUnKVxuICAgICAgcGF0aCA9IG51Y2xpZGVGaWxlVHJlZS5jb250ZXh0TWVudU1hbmFnZXIuYWN0aXZlRWxlbWVudD8uZ2V0QXR0cmlidXRlKCdkYXRhLXBhdGgnKVxuICAgICAgcGFja2FnZU9iaiA9IHNlbGVjdGVkUGF0aDpwYXRoXG4gICAgaWYgYXRvbS5wYWNrYWdlcy5pc1BhY2thZ2VMb2FkZWQoJ3RyZWUtdmlldycpID09IHRydWVcbiAgICAgIHRyZWVWaWV3ID0gYXRvbS5wYWNrYWdlcy5nZXRMb2FkZWRQYWNrYWdlKCd0cmVlLXZpZXcnKVxuICAgICAgdHJlZVZpZXcgPSByZXF1aXJlKHRyZWVWaWV3Lm1haW5Nb2R1bGVQYXRoKVxuICAgICAgcGFja2FnZU9iaiA9IHRyZWVWaWV3LnNlcmlhbGl6ZSgpXG4gICAgaWYgdHlwZW9mIHBhY2thZ2VPYmogIT0gJ3VuZGVmaW5lZCcgJiYgcGFja2FnZU9iaiAhPSBudWxsXG4gICAgICBpZiBwYWNrYWdlT2JqLnNlbGVjdGVkUGF0aFxuICAgICAgICBAb3BlblBhdGggcGFja2FnZU9iai5zZWxlY3RlZFBhdGhcbiJdfQ==
