// ** Next
import React, { useState } from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

// ** Mui
import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Icon,
  IconButton,
  InputAdornment,
  Stack,
  styled,
  TextField,
  Typography,
  useTheme
} from '@mui/material'

// ** Components
import CustomTextField from 'src/components/text-field'

// ** form
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { EMAIL_REG, PASSWORD_REG } from 'src/configs/regex'
import IconifyIcon from 'src/components/Icon'

type TProps = {}

const schema = yup
  .object()
  .shape({
    // email: yup.string().email().required("Email is required"),
    email: yup.string().required('Email is required').matches(EMAIL_REG, 'Email is not valid'),
    password: yup.string().required('Password is required').matches(PASSWORD_REG, 'Password is a least 8 character')
  })
  .required()

const LoginPage: NextPage<TProps> = () => {
  // state
  const [isShowPassword, setIsShowPassword] = useState(false)

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: { email: string; password: string }) => {
    console.log('data : ', data)
  }
  return (
    <>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' noValidate>
            <Box>
              <Controller
                control={control}
                rules={{
                  required: true
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <CustomTextField
                    required
                    fullWidth
                    label='Email Address'
                    autoComplete='email'
                    autoFocus
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder='Enter email'
                    error={Boolean(errors?.email)}
                    helperText={errors?.email?.message}
                  />
                )}
                name='email'
              />
              {/* {errors.email && <Typography>{errors?.email?.message}</Typography>} */}
            </Box>

            <Box>
              <Controller
                control={control}
                rules={{
                  required: true
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <CustomTextField
                    required
                    type={isShowPassword ? 'text' : 'password'}
                    fullWidth
                    label='Password'
                    autoComplete='password'
                    autoFocus
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder='Enter password'
                    error={Boolean(errors?.password)}
                    helperText={errors?.password?.message}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton edge='end' onClick={() => setIsShowPassword(!isShowPassword)}>
                            {isShowPassword ? <IconifyIcon icon='material-symbols:visibility-outline'/> : <IconifyIcon icon='ic:outline-visibility-off'/>}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                )}
                name='password'
              />
              {/* {errors.password && <Typography>{errors?.password?.message}</Typography>} */}
            </Box>
            <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember me' />
            <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#'>Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link href='#'>{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </>
  )
}

export default LoginPage
