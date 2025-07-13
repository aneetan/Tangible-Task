interface FormData {
    name: string;
    email: string;
    address: string;
    city: string;
}

interface ReviewFieldsProps{
    formData: FormData;
}

const ReviewFields: React.FC<ReviewFieldsProps> = ({formData}) => {
  return (
    <>
      <ul className="space-y-2 text-sm text-gray-700 bg-gray-50 p-4 rounded-lg">
      <li className="flex">
        <span className="font-medium w-24">Name:</span>
        <span>{formData.name || '-'}</span>
      </li>
      <li className="flex">
        <span className="font-medium w-24">Email:</span>
        <span>{formData.email || '-'}</span>
      </li>
      <li className="flex">
        <span className="font-medium w-24">Address:</span>
        <span>{formData.address || '-'}</span>
      </li>
      <li className="flex">
        <span className="font-medium w-24">City:</span>
        <span>{formData.city || '-'}</span>
      </li>
    </ul>
    </>
  )
}

export default ReviewFields
