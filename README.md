# wallaby-di

temp.service.ts, when the constructor is changed to include the TempBService, the tests fail.

TempBService does NOT have any dependencies, but the error remains.

This works fine when using karma.

Karma says 
> Executed 4 of 4 SUCCESS

but **WallayJs** says that 2 of 2 passed and gives the error of

```
Failed: Can't resolve all parameters for TempService: (?).
```