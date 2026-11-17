import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { asset } from '../content/assets'

export function PhotoGallery({ images }: { images: readonly string[] }) {
  const [selected, setSelected] = useState<string | null>(null)
  const dialog = useRef<HTMLDialogElement>(null)
  const closer = useRef<HTMLButtonElement>(null)
  const trigger = useRef<HTMLButtonElement | null>(null)
  useEffect(() => {
    if (selected) {
      dialog.current?.showModal()
      closer.current?.focus()
    }
  }, [selected])
  return (
    <>
      <div className="staff-photo-gallery">
        {images.map((image, index) => (
          <button
            key={image}
            aria-label={'Открыть фотографию сотрудника ' + (index + 1)}
            onClick={(event) => {
              trigger.current = event.currentTarget
              setSelected(image)
            }}
          >
            <img
              src={asset(image)}
              alt="Сотрудник кафедры"
              width={310}
              height={386}
              loading="lazy"
            />
            <span>Открыть фотографию</span>
          </button>
        ))}
      </div>
      <dialog
        className="photo-dialog"
        ref={dialog}
        aria-label="Фотография сотрудника"
        onKeyDown={(event) => {
          if (event.key === 'Tab') {
            event.preventDefault()
            closer.current?.focus()
          }
        }}
        onClose={() => {
          setSelected(null)
          trigger.current?.focus()
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close()
        }}
      >
        <button
          className="icon-button"
          ref={closer}
          aria-label="Закрыть фотографию"
          onClick={() => dialog.current?.close()}
          autoFocus
        >
          <X />
        </button>
        {selected && (
          <img src={asset(selected)} alt="Фотография сотрудника кафедры" />
        )}
      </dialog>
    </>
  )
}
