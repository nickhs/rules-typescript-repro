export type Size = 'small' | 'large' | 'foo'
export type Props = { size: Size }

export function create(props: Props) {
    return props.size;
};
