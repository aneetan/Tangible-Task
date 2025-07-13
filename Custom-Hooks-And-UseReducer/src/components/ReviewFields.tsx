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
    <ul>
        <li><strong>Name:</strong> {formData.name}</li>
        <li><strong>Email:</strong> {formData.email}</li>
        <li><strong>Address:</strong> {formData.address}</li>
        <li><strong>City:</strong> {formData.city}</li>
    </ul>
    </>
  )
}

export default ReviewFields
