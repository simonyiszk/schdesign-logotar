import os


class Path:
    def __init__(self, path):
        self._path = os.path.normpath(path)

    @property
    def directories(self):
        return (
            self.child(name) for name in os.listdir(self._path)
            if os.path.isdir(self.child_name(name))
        )

    @property
    def files(self):
        return (
            self.child(name) for name in os.listdir(self._path)
            if os.path.isfile(self.child_name(name))
        )

    def child(self, name):
        return Path(self.child_name(name))

    def child_name(self, name):
        return os.path.join(self._path, name)

    def webify(self, old_base, new_base):
        path = self._path.replace(old_base, new_base)
        return "/".join(path.split("\\"))

    @property
    def real_path(self):
        return self._path

    @property
    def name(self):
        return self._path.split(os.path.sep)[-1]
