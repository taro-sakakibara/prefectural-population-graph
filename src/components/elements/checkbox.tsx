import styled from 'styled-components'
import { pc } from '../../media'

interface Props {
  prefectures:
    | {
        prefCode: number
        prefName: string
      }[]
  onChange: (name: string, prefName: number, check: boolean) => void
}

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
`

const PrefName = styled.span`
  display: inline-block;
  margin-left: 10px;
`

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  place-items: flex-start;
  ${pc`
	grid-template-columns: repeat(4, minmax(0, 1fr));
`}
`

export const CheckBox: React.FC<Props> = ({ prefectures, onChange }) => {
  return (
    <>
      <GridLayout>
        {prefectures.map((prefecture, i) => (
          <Wrapper key={i}>
            <input
              type='checkbox'
              name='Prefecture name'
              onChange={(event: any) =>
                onChange(
                  prefecture.prefName,
                  prefecture.prefCode,
                  event.target.checked
                )
              }
              id={`checkbox${prefecture.prefCode}`}
            />
            <label htmlFor={`checkbox${prefecture.prefCode}`}>
              <PrefName>{prefecture.prefName}</PrefName>
            </label>
          </Wrapper>
        ))}
      </GridLayout>
    </>
  )
}
