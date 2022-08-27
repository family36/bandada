import { SystemStyleObject } from "@chakra-ui/react"
import { GlobalStyleProps } from "@chakra-ui/theme-tools"

const Button = {
    baseStyle: {
        _focus: {
            boxShadow: "none"
        },
        borderRadius: "4px"
    },
    defaultProps: {
        size: "lg"
    },
    variants: {
        solid: (props: GlobalStyleProps): SystemStyleObject => {
            const { colorScheme: c } = props

            if (c === "primary") {
                const bg = `${c}.800`
                const color = `${c}.50`

                return {
                    bg,
                    color,
                    _hover: {
                        bg: `${c}.700`,
                        _disabled: {
                            bg
                        }
                    },
                    _active: { bg: `${c}.900` }
                }
            }

            const bg = "rgba(0,0,0,0)"

            return {
                bg,
                color: `${c}.800`,
                _hover: {
                    bg: `${c}.200`,
                    _disabled: {
                        bg
                    }
                },
                _active: { bg: `${c}.300` }
            }
        }
    }
}

export default Button
