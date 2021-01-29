# End-to-End Testing

## GUI Testing

Automated web-based graphical user interface testing:

  - Specification: `gui/**/*.spec.js`
  - Benchmark: `gui/**/*.meas.js`

## API Testing

Automated application programming interface Testing:

  - Specification: `api/**/*.spec.js`
  - Benchmark: `api/**/*.meas.js`

## Usage

```sh
$ pnpm gui:spec
$ pnpm gui:spec-run <FILE_PATH>

$ pnpm gui:meas
$ pnpm gui:meas-run <FILE_PATH>
```

```sh
$ pnpm api:spec
$ pnpm api:spec-run <FILE_PATH>

$ pnpm api:meas
$ pnpm api:meas-run <FILE_PATH>
```
