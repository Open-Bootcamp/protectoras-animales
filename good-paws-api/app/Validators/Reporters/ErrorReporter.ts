import {
  ValidationException,
  MessagesBagContract,
  ErrorReporterContract,
} from '@ioc:Adonis/Core/Validator'

type ErrorNode = {
  field: string
  error: string
}

export default class ErrorReporter implements ErrorReporterContract<{ errors: ErrorNode[] }> {
  public hasErrors = false
  private errors: ErrorNode[] = []

  constructor(private messages: MessagesBagContract, private bail: boolean) {}

  public report(
    pointer: string,
    rule: string,
    message: string,
    arrayExpressionPointer?: string,
    args?: any
  ) {
    this.hasErrors = true
    const errorMessage = this.messages.get(pointer, rule, message, arrayExpressionPointer, args)
    this.errors.push({ field: pointer, error: errorMessage })

    if (this.bail) {
      throw this.toError()
    }
  }

  public toError() {
    throw new ValidationException(false, this.toJSON())
  }

  public toJSON() {
    return {
      totalErrors: this.errors.length,
      errors: this.errors,
    }
  }
}
