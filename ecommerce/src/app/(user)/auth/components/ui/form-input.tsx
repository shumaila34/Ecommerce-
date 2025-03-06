import { useField } from "formik"

interface FormInputProps {
  label: string
  name: string
  type?: string
  placeholder?: string
}

export function FormInput({ label, ...props }: FormInputProps) {
  const [field, meta] = useField(props)
  const isError = meta.touched && meta.error

  return (
    <div>
      <label htmlFor={props.name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        {...field}
        {...props}
        className={`mt-1 block w-full px-3 py-2 border ${
          isError ? "border-red-300" : "border-gray-300"
        } rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500`}
      />
      {isError && <p className="mt-1 text-sm text-red-600">{meta.error}</p>}
    </div>
  )
}

